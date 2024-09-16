# Proof-of-Concept Live Pulumi Resource Generation from Remote Kubernetes CRDs

## Warning: This is experimental and a WIP, and a culmination of several projects that have not been heavily tested

This is a small project working as a proof of concept to generate custom Pulumi resources on-the-fly from remote Kubernetes CRDs.

Important notes:

- Due to nonara/ts-patch#153, the most recent version of node this works on seems to be 21.7.3
- This is inherently not the safest of things to use. Loading resource definitions essentially unchecked from remote URLs is not in any way secure
- I give no promises of stability or support

## The problem

Pulumi is cool, but its community isn't huge. It's unlikely you'll find someone who has both created a component to manage the Custom Resource Definition you want to install and has open sourced it. But, you can easily define an instance of a [CustomResource](https://www.pulumi.com/registry/packages/kubernetes/api-docs/apiextensions/customresource/) and/or extend it with your own types, problem solved.

That's slightly more effort than I feel like putting in, though. I don't particularly want to define a bunch of custom resources by hand just to get decent type-checking, especially for the swaths of potential CRDs I'll want to install. Since CRDs are essentially OpenAPI documents, we should be able to generate them fairly easily.

## Part 1 - Converting from CRD YAML to Pulumi Resources

First up, let's set this up how you're meant to do it - Generate the code and release it as a versioned package. With tools like [yaacov/crdtoapi](https://github.com/yaacov/crdtoapi/), [dsherret/ts-morph](https://github.com/dsherret/ts-morph) and a simple template based on Pulumi/Kubernetes CustomResource, we can generate a resource representing each resource defined in the CRDs, and simply have CI build and push it as a package.

Job done, right? For most people, yes! At this point you've got a package that you can simply add CRDs to and then the next version of the package will contain resources you can import. Most of the time, this is enough.

But then I thought, _"But wait, I'm immensely lazy and don't want to deal with updating my package just to add a new set of CRDs, I just want them generated on-the-fly by putting a link to the YAML in my code"_

## Part 2 - Yeah no, Node can't do that

There's been a lot of discussions over the years about how the Node ecosystem could handle remote packages, and some of the other JS-ish runtimes have adopted it (eg [Deno](https://docs.deno.com/runtime/fundamentals/modules/#importing-third-party-modules-and-libraries)).

Node itself has [limited and experimental support](https://nodejs.org/api/module.html#import-from-https) for remote imports. This gave me an idea like this:

```js
const aLinkToACRD = "https://github.com/kedacore/keda/releases/download/v2.15.1/keda-2.15.1-crds.yaml"
const { resources } = await import(`https://an-api-that-converts-yaml-to-js/${aLinkToACRD}`)
```

Theoretically, if we simply modified the automation we built in part 1 and turned it into an API that could do it on-the-fly, that might actually work. In fact, there are several CDNs like [esm.sh](https://esm.sh/) and [SkyPack](https://www.skypack.dev/) that already do this.

Unfortunately, before I got too deep into building that I realised that the main reason I'm doing this is for maximum Developer Experience, and realistically this is only applicable to raw JS. It has very little chance of working with TypeScript, and even less if you want type hinting in IDE's like VSCode. CDN's, such as those linked above, generally only work with runtimes like Deno and are very frontend-focused. Although `esm.sh` does have a VSCode plugin that should allow it to work, it very much doesn't seem to be designed for this use-case.

TypeScript at the moment does _not_ support remote loading, so we have to get a bit... creative.

## Part 3 - What if we just, like, hack TypeScript?

[ts-node](https://github.com/TypeStrong/ts-node) allows you to run TS files directly, without a pesky compilation step, and has been a mainstay in my projects since I started writing TypeScript. Additionally, it has functionality allowing you to [replace the tsc compiler](https://github.com/TypeStrong/ts-node?tab=readme-ov-file#compiler), and supports [plugins](https://github.com/TypeStrong/ts-node?tab=readme-ov-file#third-party-compilers) that allow you to change the behaviour of the compiler on-the-fly.

When you start researching custom compilers for TS, you're likely to come across [ts-patch](https://github.com/nonara/ts-patch), a very powerful TS compiler that exposes access to TypeScripts 'Transformer' API. This allows us to hook into the compiler at essentially any point, produce whatever we want, and trick TypeScript into believing it was there the whole time.

The incredibly cool thing about this is it even works with VSCode, because it's possible to configure the `typescript.tsdk` config setting to make VSCode use our patched TypeScript under the hood. This means we can transform our code _and_ have all our tooling (theoretically) work with it.

(Sidenote: Why didn't I use one of the other TS runtimes that support this, like Deno? I dunno. I wanted to learn more about the TS compiler API and this sounded like fun)

An immediate blocker I hit was nonara/ts-patch#153 - transformers in ts-patch w/ ESM don't seem to work in Node 22 and above, currently. This limits us to `21.7.3` for the time being, and I went with the current LTS `20.17.0` for a chance at this working for more than a week.

__At this point I got stuck trying to get the ts-morph program transformer to work. I'll continue it at some point to hopefully get the PoC. The [advice given](https://github.com/nonara/ts-patch/discussions/31) by the developer of ts-patch is very correct in that this is basically no-mans land.__
