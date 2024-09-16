console.log('Transformer loaded');
import path from 'path';
import { fileURLToPath } from 'url';
const newFile = path.resolve(path.join(path.dirname(fileURLToPath(import.meta.url)), 'added-file.ts'));
// export function transform (program: ts.Program, host: ts.CompilerHost | undefined, options: PluginConfig, extras: ProgramTransformerExtras): ts.Program {
// return extras.ts.createProgram(
//   program.getRootFileNames(),
//   program.getCompilerOptions(),
//   host,
//   program
// )
// }
function getPatchedHost(maybeHost, tsInstance, compilerOptions) {
    const fileCache = new Map();
    const compilerHost = maybeHost || tsInstance.createCompilerHost(compilerOptions, true);
    const originalGetSourceFile = compilerHost.getSourceFile;
    return Object.assign(compilerHost, {
        getSourceFile(fileName, languageVersion) {
            fileName = tsInstance.normalizePath(fileName);
            if (fileCache.has(fileName))
                return fileCache.get(fileName);
            const sourceFile = originalGetSourceFile.apply(void 0, Array.from(arguments));
            fileCache.set(fileName, sourceFile);
            return sourceFile;
        },
        fileCache
    });
}
export default function transformProgram(program, host, options, { ts: tsInstance }) {
    const compilerOptions = program.getCompilerOptions();
    const compilerHost = getPatchedHost(host, tsInstance, compilerOptions);
    const rootFileNames = program.getRootFileNames().map(tsInstance.normalizePath);
    /* Transform AST */
    const transformedSource = tsInstance.transform(
    /* sourceFiles */ program.getSourceFiles().filter(sourceFile => rootFileNames.includes(sourceFile.fileName)), 
    /* transformers */ [transformAst.bind(tsInstance)], compilerOptions).transformed;
    /* Render modified files and create new SourceFiles for them to use in host's cache */
    const { printFile } = tsInstance.createPrinter();
    for (const sourceFile of transformedSource) {
        const { fileName, languageVersion } = sourceFile;
        const updatedSourceFile = tsInstance.createSourceFile(fileName, printFile(sourceFile), languageVersion);
        compilerHost.fileCache.set(fileName, updatedSourceFile);
    }
    debugger;
    // return program
    const newProgram = tsInstance.createProgram(rootFileNames, compilerOptions, compilerHost, program);
    debugger;
    return program;
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
function transformAst(context) {
    const tsInstance = this;
    /* Transformer Function */
    return (sourceFile) => {
        return tsInstance.visitEachChild(sourceFile, visit, context);
        /* Visitor Function */
        function visit(node) {
            // if (node.kind === SyntaxKind.NumberKeyword)
            //   return context.factory.createKeywordTypeNode(tsInstance.SyntaxKind.StringKeyword);
            // else
            return tsInstance.visitEachChild(node, visit, context);
        }
    };
}
// endregion
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7QUFDakMsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFBO0FBSXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxLQUFLLENBQUE7QUFFbkMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFBO0FBRXRHLDRKQUE0SjtBQUMxSixrQ0FBa0M7QUFDbEMsZ0NBQWdDO0FBQ2hDLGtDQUFrQztBQUNsQyxVQUFVO0FBQ1YsWUFBWTtBQUNaLElBQUk7QUFDTixJQUFJO0FBRUosU0FBUyxjQUFjLENBQ3JCLFNBQW1DLEVBQ25DLFVBQXFCLEVBQ3JCLGVBQWdDO0lBR2hDLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDNUIsTUFBTSxZQUFZLEdBQUcsU0FBUyxJQUFJLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkYsTUFBTSxxQkFBcUIsR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDO0lBRXpELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7UUFDakMsYUFBYSxDQUFDLFFBQWdCLEVBQUUsZUFBZ0M7WUFDOUQsUUFBUSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztnQkFBRSxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFNUQsTUFBTSxVQUFVLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFRLENBQUMsQ0FBQztZQUNyRixTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUVwQyxPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDO1FBQ0QsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNLENBQUMsT0FBTyxVQUFVLGdCQUFnQixDQUFFLE9BQW1CLEVBQUUsSUFBcUIsRUFBRSxPQUFxQixFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBNEI7SUFDdkosTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUE7SUFDcEQsTUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUE7SUFDdEUsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUc5RSxtQkFBbUI7SUFDbkIsTUFBTSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsU0FBUztJQUM1QyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUcsa0JBQWtCLENBQUMsQ0FBRSxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFFLEVBQ3BELGVBQWUsQ0FDaEIsQ0FBQyxXQUFXLENBQUM7SUFFZCxzRkFBc0Y7SUFDdEYsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNqRCxLQUFLLE1BQU0sVUFBVSxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDM0MsTUFBTSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDakQsTUFBTSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUN4RyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsUUFBUSxDQUFBO0lBQ1IsaUJBQWlCO0lBQ2pCLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQ3pDLGFBQWEsRUFDYixlQUFlLEVBQ2YsWUFBWSxFQUNaLE9BQU8sQ0FDUixDQUFBO0lBQ0QsUUFBUSxDQUFBO0lBQ1IsT0FBTyxPQUFPLENBQUE7QUFDaEIsQ0FBQztBQUVELHdIQUF3SDtBQUN4SCwwQkFBMEI7QUFDMUIsd0hBQXdIO0FBRXhIOzs7Ozs7Ozs7R0FTRztBQUNILFNBQVMsWUFBWSxDQUFrQixPQUE4QjtJQUNuRSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFFeEIsMEJBQTBCO0lBQzFCLE9BQU8sQ0FBQyxVQUFzQixFQUFFLEVBQUU7UUFDaEMsT0FBTyxVQUFVLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFN0Qsc0JBQXNCO1FBQ3RCLFNBQVMsS0FBSyxDQUFDLElBQVU7WUFDdkIsOENBQThDO1lBQzlDLHVGQUF1RjtZQUN2RixPQUFPO1lBQ0wsT0FBTyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0QsQ0FBQztJQUNILENBQUMsQ0FBQTtBQUNILENBQUM7QUFFRCxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ1RyYW5zZm9ybWVyIGxvYWRlZCcpXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgfSBmcm9tICd0cy1leHBvc2UtaW50ZXJuYWxzJ1xuaW1wb3J0IHsgUGx1Z2luQ29uZmlnLCBQcm9ncmFtVHJhbnNmb3JtZXJFeHRyYXMgfSBmcm9tIFwidHMtcGF0Y2hcIlxuaW1wb3J0IHRzIGZyb20gJ3R5cGVzY3JpcHQnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJ1xuXG5jb25zdCBuZXdGaWxlID0gcGF0aC5yZXNvbHZlKHBhdGguam9pbihwYXRoLmRpcm5hbWUoZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKSwgJ2FkZGVkLWZpbGUudHMnKSlcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybSAocHJvZ3JhbTogdHMuUHJvZ3JhbSwgaG9zdDogdHMuQ29tcGlsZXJIb3N0IHwgdW5kZWZpbmVkLCBvcHRpb25zOiBQbHVnaW5Db25maWcsIGV4dHJhczogUHJvZ3JhbVRyYW5zZm9ybWVyRXh0cmFzKTogdHMuUHJvZ3JhbSB7XG4gIC8vIHJldHVybiBleHRyYXMudHMuY3JlYXRlUHJvZ3JhbShcbiAgLy8gICBwcm9ncmFtLmdldFJvb3RGaWxlTmFtZXMoKSxcbiAgLy8gICBwcm9ncmFtLmdldENvbXBpbGVyT3B0aW9ucygpLFxuICAvLyAgIGhvc3QsXG4gIC8vICAgcHJvZ3JhbVxuICAvLyApXG4vLyB9XG5cbmZ1bmN0aW9uIGdldFBhdGNoZWRIb3N0KFxuICBtYXliZUhvc3Q6IENvbXBpbGVySG9zdCB8IHVuZGVmaW5lZCxcbiAgdHNJbnN0YW5jZTogdHlwZW9mIHRzLFxuICBjb21waWxlck9wdGlvbnM6IENvbXBpbGVyT3B0aW9uc1xuKTogQ29tcGlsZXJIb3N0ICYgeyBmaWxlQ2FjaGU6IE1hcDxzdHJpbmcsIFNvdXJjZUZpbGU+IH1cbntcbiAgY29uc3QgZmlsZUNhY2hlID0gbmV3IE1hcCgpO1xuICBjb25zdCBjb21waWxlckhvc3QgPSBtYXliZUhvc3QgfHwgdHNJbnN0YW5jZS5jcmVhdGVDb21waWxlckhvc3QoY29tcGlsZXJPcHRpb25zLCB0cnVlKTtcbiAgY29uc3Qgb3JpZ2luYWxHZXRTb3VyY2VGaWxlID0gY29tcGlsZXJIb3N0LmdldFNvdXJjZUZpbGU7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oY29tcGlsZXJIb3N0LCB7XG4gICAgZ2V0U291cmNlRmlsZShmaWxlTmFtZTogc3RyaW5nLCBsYW5ndWFnZVZlcnNpb246IHRzLlNjcmlwdFRhcmdldCkge1xuICAgICAgZmlsZU5hbWUgPSB0c0luc3RhbmNlLm5vcm1hbGl6ZVBhdGgoZmlsZU5hbWUpO1xuICAgICAgaWYgKGZpbGVDYWNoZS5oYXMoZmlsZU5hbWUpKSByZXR1cm4gZmlsZUNhY2hlLmdldChmaWxlTmFtZSk7XG5cbiAgICAgIGNvbnN0IHNvdXJjZUZpbGUgPSBvcmlnaW5hbEdldFNvdXJjZUZpbGUuYXBwbHkodm9pZCAwLCBBcnJheS5mcm9tKGFyZ3VtZW50cykgYXMgYW55KTtcbiAgICAgIGZpbGVDYWNoZS5zZXQoZmlsZU5hbWUsIHNvdXJjZUZpbGUpO1xuXG4gICAgICByZXR1cm4gc291cmNlRmlsZTtcbiAgICB9LFxuICAgIGZpbGVDYWNoZVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNmb3JtUHJvZ3JhbSAocHJvZ3JhbTogdHMuUHJvZ3JhbSwgaG9zdDogdHMuQ29tcGlsZXJIb3N0LCBvcHRpb25zOiBQbHVnaW5Db25maWcsIHsgdHM6IHRzSW5zdGFuY2UgfTogUHJvZ3JhbVRyYW5zZm9ybWVyRXh0cmFzKTogdHMuUHJvZ3JhbSB7XG4gIGNvbnN0IGNvbXBpbGVyT3B0aW9ucyA9IHByb2dyYW0uZ2V0Q29tcGlsZXJPcHRpb25zKClcbiAgY29uc3QgY29tcGlsZXJIb3N0ID0gZ2V0UGF0Y2hlZEhvc3QoaG9zdCwgdHNJbnN0YW5jZSwgY29tcGlsZXJPcHRpb25zKVxuICBjb25zdCByb290RmlsZU5hbWVzID0gcHJvZ3JhbS5nZXRSb290RmlsZU5hbWVzKCkubWFwKHRzSW5zdGFuY2Uubm9ybWFsaXplUGF0aClcblxuXG4gIC8qIFRyYW5zZm9ybSBBU1QgKi9cbiAgY29uc3QgdHJhbnNmb3JtZWRTb3VyY2UgPSB0c0luc3RhbmNlLnRyYW5zZm9ybShcbiAgICAvKiBzb3VyY2VGaWxlcyAqLyBwcm9ncmFtLmdldFNvdXJjZUZpbGVzKCkuZmlsdGVyKHNvdXJjZUZpbGUgPT4gcm9vdEZpbGVOYW1lcy5pbmNsdWRlcyhzb3VyY2VGaWxlLmZpbGVOYW1lKSksXG4gICAgLyogdHJhbnNmb3JtZXJzICovIFsgdHJhbnNmb3JtQXN0LmJpbmQodHNJbnN0YW5jZSkgXSxcbiAgICBjb21waWxlck9wdGlvbnNcbiAgKS50cmFuc2Zvcm1lZDtcblxuICAvKiBSZW5kZXIgbW9kaWZpZWQgZmlsZXMgYW5kIGNyZWF0ZSBuZXcgU291cmNlRmlsZXMgZm9yIHRoZW0gdG8gdXNlIGluIGhvc3QncyBjYWNoZSAqL1xuICBjb25zdCB7IHByaW50RmlsZSB9ID0gdHNJbnN0YW5jZS5jcmVhdGVQcmludGVyKCk7XG4gIGZvciAoY29uc3Qgc291cmNlRmlsZSBvZiB0cmFuc2Zvcm1lZFNvdXJjZSkge1xuICAgIGNvbnN0IHsgZmlsZU5hbWUsIGxhbmd1YWdlVmVyc2lvbiB9ID0gc291cmNlRmlsZTtcbiAgICBjb25zdCB1cGRhdGVkU291cmNlRmlsZSA9IHRzSW5zdGFuY2UuY3JlYXRlU291cmNlRmlsZShmaWxlTmFtZSwgcHJpbnRGaWxlKHNvdXJjZUZpbGUpLCBsYW5ndWFnZVZlcnNpb24pO1xuICAgIGNvbXBpbGVySG9zdC5maWxlQ2FjaGUuc2V0KGZpbGVOYW1lLCB1cGRhdGVkU291cmNlRmlsZSk7XG4gIH1cblxuICBkZWJ1Z2dlclxuICAvLyByZXR1cm4gcHJvZ3JhbVxuICBjb25zdCBuZXdQcm9ncmFtID0gdHNJbnN0YW5jZS5jcmVhdGVQcm9ncmFtKFxuICAgIHJvb3RGaWxlTmFtZXMsXG4gICAgY29tcGlsZXJPcHRpb25zLFxuICAgIGNvbXBpbGVySG9zdCxcbiAgICBwcm9ncmFtXG4gIClcbiAgZGVidWdnZXJcbiAgcmV0dXJuIHByb2dyYW1cbn1cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vLyByZWdpb246IEFTVCBUcmFuc2Zvcm1lclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogQ2hhbmdlIGFsbCAnbnVtYmVyJyBrZXl3b3JkcyB0byAnc3RyaW5nJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBiZWZvcmVcbiAqIHR5cGUgQSA9IG51bWJlclxuICpcbiAqIC8vIGFmdGVyXG4gKiB0eXBlIEEgPSBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtQXN0KHRoaXM6IHR5cGVvZiB0cywgY29udGV4dDogVHJhbnNmb3JtYXRpb25Db250ZXh0KSB7XG4gIGNvbnN0IHRzSW5zdGFuY2UgPSB0aGlzO1xuXG4gIC8qIFRyYW5zZm9ybWVyIEZ1bmN0aW9uICovXG4gIHJldHVybiAoc291cmNlRmlsZTogU291cmNlRmlsZSkgPT4ge1xuICAgIHJldHVybiB0c0luc3RhbmNlLnZpc2l0RWFjaENoaWxkKHNvdXJjZUZpbGUsIHZpc2l0LCBjb250ZXh0KTtcblxuICAgIC8qIFZpc2l0b3IgRnVuY3Rpb24gKi9cbiAgICBmdW5jdGlvbiB2aXNpdChub2RlOiBOb2RlKTogTm9kZSB7XG4gICAgICAvLyBpZiAobm9kZS5raW5kID09PSBTeW50YXhLaW5kLk51bWJlcktleXdvcmQpXG4gICAgICAvLyAgIHJldHVybiBjb250ZXh0LmZhY3RvcnkuY3JlYXRlS2V5d29yZFR5cGVOb2RlKHRzSW5zdGFuY2UuU3ludGF4S2luZC5TdHJpbmdLZXl3b3JkKTtcbiAgICAgIC8vIGVsc2VcbiAgICAgICAgcmV0dXJuIHRzSW5zdGFuY2UudmlzaXRFYWNoQ2hpbGQobm9kZSwgdmlzaXQsIGNvbnRleHQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBlbmRyZWdpb25cbiJdfQ==