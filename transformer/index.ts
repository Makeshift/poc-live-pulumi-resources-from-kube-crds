console.log('Transformer loaded')
import path from 'path'
import { } from 'ts-expose-internals'
import { PluginConfig, ProgramTransformerExtras } from "ts-patch"
import ts from 'typescript'
import { fileURLToPath } from 'url'

const newFile = path.resolve(path.join(path.dirname(fileURLToPath(import.meta.url)), 'added-file.ts'))

// export function transform (program: ts.Program, host: ts.CompilerHost | undefined, options: PluginConfig, extras: ProgramTransformerExtras): ts.Program {
  // return extras.ts.createProgram(
  //   program.getRootFileNames(),
  //   program.getCompilerOptions(),
  //   host,
  //   program
  // )
// }

function getPatchedHost(
  maybeHost: CompilerHost | undefined,
  tsInstance: typeof ts,
  compilerOptions: CompilerOptions
): CompilerHost & { fileCache: Map<string, SourceFile> }
{
  const fileCache = new Map();
  const compilerHost = maybeHost || tsInstance.createCompilerHost(compilerOptions, true);
  const originalGetSourceFile = compilerHost.getSourceFile;

  return Object.assign(compilerHost, {
    getSourceFile(fileName: string, languageVersion: ts.ScriptTarget) {
      fileName = tsInstance.normalizePath(fileName);
      if (fileCache.has(fileName)) return fileCache.get(fileName);

      const sourceFile = originalGetSourceFile.apply(void 0, Array.from(arguments) as any);
      fileCache.set(fileName, sourceFile);

      return sourceFile;
    },
    fileCache
  });
}

export default function transformProgram (program: ts.Program, host: ts.CompilerHost, options: PluginConfig, { ts: tsInstance }: ProgramTransformerExtras): ts.Program {
  const compilerOptions = program.getCompilerOptions()
  const compilerHost = getPatchedHost(host, tsInstance, compilerOptions)
  const rootFileNames = program.getRootFileNames().map(tsInstance.normalizePath)


  /* Transform AST */
  const transformedSource = tsInstance.transform(
    /* sourceFiles */ program.getSourceFiles().filter(sourceFile => rootFileNames.includes(sourceFile.fileName)),
    /* transformers */ [ transformAst.bind(tsInstance) ],
    compilerOptions
  ).transformed;

  /* Render modified files and create new SourceFiles for them to use in host's cache */
  const { printFile } = tsInstance.createPrinter();
  for (const sourceFile of transformedSource) {
    const { fileName, languageVersion } = sourceFile;
    const updatedSourceFile = tsInstance.createSourceFile(fileName, printFile(sourceFile), languageVersion);
    compilerHost.fileCache.set(fileName, updatedSourceFile);
  }

  debugger
  // return program
  // const newProgram = tsInstance.createProgram(
  //   rootFileNames,
  //   compilerOptions,
  //   compilerHost,
  //   program
  // )
  debugger
  return program
}

/* ****************************************************************************************************************** */
// region: AST Transformer
/* ****************************************************************************************************************** */

/**
 * Change all 'number' keywords to 'string'
 *
 * @example
 * // before
 * type A = number
 *
 * // after
 * type A = string
 */
function transformAst(this: typeof ts, context: TransformationContext) {
  const tsInstance = this;

  /* Transformer Function */
  return (sourceFile: SourceFile) => {
    return tsInstance.visitEachChild(sourceFile, visit, context);

    /* Visitor Function */
    function visit(node: Node): Node {
      // if (node.kind === SyntaxKind.NumberKeyword)
      //   return context.factory.createKeywordTypeNode(tsInstance.SyntaxKind.StringKeyword);
      // else
        return tsInstance.visitEachChild(node, visit, context);
    }
  }
}

// endregion
