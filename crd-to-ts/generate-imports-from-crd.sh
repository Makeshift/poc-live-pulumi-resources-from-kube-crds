#!/bin/bash
set -exo pipefail

# This should have been part of build.ts, but I wrote it before deciding to use ts-morph

HELP="Generate TS-compatible interfaces based on CRDs in GitHub releases
Usage: ./generate-imports.sh [--version x | latest] <user/repo> <filename regex> <output dir>
  --help: Display this help message
  --version: The version to download CRDs from, should be a valid tag or 'latest' (default: latest)
  <user/repo>: The GitHub repository to download CRDs from
  <filename regex>: A regex to match the CRD filenames to download, eg 'keda-.*-crds.yaml'
  <output dir>: The directory to write the generated files to

Assumes you have:
- yq
- jq
- curl
- ran 'yarn install'
"

POSITIONAL_ARGS=()
VERSION="latest"


while [[ $# -gt 0 ]]; do
  case $1 in
    --help)
      echo "$HELP"
      exit 0
      ;;
    --version)
      VERSION="$2"
      shift # past argument
      shift # past value
      ;;
    *)
      POSITIONAL_ARGS+=("$1") # save positional arg
      shift # past argument
      ;;
  esac
done

if [ ${#POSITIONAL_ARGS[@]} -ne 3 ]; then
  echo "Error: Invalid number of arguments"
  echo "$HELP"
  exit 1
fi

USER_REPO="${POSITIONAL_ARGS[0]}"
FILENAME_REGEX="${POSITIONAL_ARGS[1]}"
OUTPUT_DIR="${POSITIONAL_ARGS[2]}"

mkdir -p "${OUTPUT_DIR}/api" "${OUTPUT_DIR}/crds" "${OUTPUT_DIR}/models" "${OUTPUT_DIR}/interfaces"
cd "$OUTPUT_DIR" || exit 1

gh_releases="https://api.github.com/repos/${USER_REPO}/releases"

if [ "$VERSION" == "latest" ]; then
  assets=$(curl -s "$gh_releases/latest" | jq -r '.assets')
else
  release_id=$(curl -s "$gh_releases" | jq -r '.[] | select(.tag_name == "'"$VERSION"'") | .id')
  assets=$(curl -s "$gh_releases/$release_id" | jq -r '.assets')
fi

if [ -z "$assets" ]; then
  echo "Error: No releases found for $USER_REPO"
  exit 1
fi

asset=$(echo "$assets" | jq -r '.[] | select(.name | test("'"$FILENAME_REGEX"'"))')
asset_url=$(echo "$asset" | jq -r '.browser_download_url')
asset_name=$(echo "$asset" | jq -r '.name')
echo "Downloading CRDs from $asset_url"

curl -sL "$asset_url" -o "$asset_name"

echo "Splitting CRDs into individual files"
yq -s '"crds/" + $index + "_'"$asset_name"'"' "$asset_name"
rm "$asset_name"

api_path="./api/${asset_name%.yaml}-openapi.yaml"

echo "Generating openapi for $asset_name"
yarn crdtoapi --in "./crds" --out "$api_path" --noApiVersionPrefix

echo "Generating models for $api_path"
yarn crdtomodel --in "./crds" --out "./models"

echo "Generating interfaces for $api_path"
yarn crdtotypes --in "$api_path" --out "./interfaces"

echo "Disabling linting and type-checking for generated files"
for file in ./interfaces/* ./models/*; do
  sed -i '1i \/\/ @ts-nocheck' "$file"
done
