import { dirname, join } from 'path'
import { IndentationText, NewLineKind, Project, QuoteKind, SyntaxKind, VariableDeclaration, VariableDeclarationKind } from 'ts-morph'
import { fileURLToPath } from 'url'

const project = new Project({
  tsConfigFilePath: join(dirname(fileURLToPath(import.meta.url)), '..', 'tsconfig.json'),
  manipulationSettings: {
    insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
    quoteKind: QuoteKind.Single,
    indentationText: IndentationText.TwoSpaces,
    newLineKind: NewLineKind.LineFeed
  }
})

const indexFile = project.createSourceFile(join('src', 'index.ts'), undefined, { overwrite: true })
project.addSourceFilesAtPaths(join('src/**/*.ts'))

const getValueOfPropertyFromObjectVarOrThrow = (objectVar: VariableDeclaration, propertyName: string) => {
  return objectVar
    .getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression)
    .getPropertyOrThrow(propertyName)
    .asKindOrThrow(SyntaxKind.PropertyAssignment)
    .getInitializerIfKindOrThrow(SyntaxKind.StringLiteral)
    .getLiteralValue()
}

// For each directory in src
const srcDir = project.getDirectoryOrThrow('src')
for (const groupDir of srcDir.getDirectories()) {
  // Add an export statement to the top-level index file
  indexFile.addExportDeclaration({
    moduleSpecifier: indexFile.getDirectory().getRelativePathAsModuleSpecifierTo(groupDir.getPath()),
    namespaceExport: groupDir.getBaseName()
  })

  // Set up the group's index file
  const groupIndexFile = groupDir.createSourceFile('index.ts', undefined, { overwrite: true })
  const groupInterfacesDir = groupDir.getDirectoryOrThrow('interfaces')
  const groupModelsDir = groupDir.getDirectoryOrThrow('models')
  groupIndexFile.addExportDeclarations([{
    moduleSpecifier: groupIndexFile.getRelativePathAsModuleSpecifierTo(groupInterfacesDir.getPath()),
    namespaceExport: 'interfaces'
  }, {
    moduleSpecifier: groupIndexFile.getRelativePathAsModuleSpecifierTo(groupModelsDir.getPath()),
    namespaceExport: 'models'
  }])

  const resourceDir = groupDir.createDirectory('resources')
  const resourcesIndexFile = resourceDir.createSourceFile('index.ts', undefined, { overwrite: true })
  groupIndexFile.addExportDeclaration({
    moduleSpecifier: groupIndexFile.getRelativePathAsModuleSpecifierTo(resourceDir.getPath()),
    namespaceExport: 'resources'
  })

  const resourceTemplateFile = project.getSourceFileOrThrow('src/resource-template.ts')

  // For each file in the models dir, create a Pulumi resource
  for (const modelFile of groupModelsDir.getSourceFiles('*.ts')) {
    if (modelFile.isDeclarationFile() || modelFile.getBaseNameWithoutExtension() === 'index') continue;

    const modelName = modelFile.getBaseNameWithoutExtension().split('.')[0]

    // Read the model file and extract ${modelName}.kind and ${modelName}.apiVersion
    const modelDeclaration = modelFile.getVariableDeclarationOrThrow(modelName)
    const modelApiVersion = getValueOfPropertyFromObjectVarOrThrow(modelDeclaration, 'apiVersion')
    const resourceName = getValueOfPropertyFromObjectVarOrThrow(modelDeclaration, 'kind')

    // Grab the interface file
    const interfaceFile = groupInterfacesDir.getSourceFileOrThrow(`${resourceName}.ts`)

    // Create the resource file
    const resourceFile = resourceDir.createSourceFile(`${resourceName}.ts`, undefined, { overwrite: true })

    // Import the model, interface and generateCustomResourceClass from ../resource-template.ts
    resourceFile.addImportDeclarations([{
      moduleSpecifier: resourceFile.getRelativePathAsModuleSpecifierTo(modelFile),
      namedImports: [`${resourceName}Model`]
    }, {
      moduleSpecifier: resourceFile.getRelativePathAsModuleSpecifierTo(interfaceFile),
      namedImports: [{
        name: resourceName,
        alias: `${resourceName}Interface`
      }],
      isTypeOnly: true
    }, {
      moduleSpecifier: resourceFile.getRelativePathAsModuleSpecifierTo(resourceTemplateFile),
      namedImports: ['generateCustomResourceClass']
    }])

    // Define the resource class as a call to generateCustomResourceClass
    resourceFile.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      docs: [`Generated from models/${modelFile.getBaseName()} for ${resourceName} @ ${modelApiVersion}`],
      declarations: [{
        name: resourceName,
        initializer: writer => {
          writer.writeLine(`generateCustomResourceClass<${resourceName}Interface>(`).block(() => {
            writer.writeLine('properties:').block(() => {
              writer.writeLine(`apiVersion: ${modelName}.apiGroup + '/' + ${modelName}.apiVersion,`)
                .writeLine(`kind: ${modelName}.kind,`)
                .writeLine(`group: ${modelName}.apiGroup`)
            })
          }).write(')')
        }
      }]
    })

    // Add the export statement to the resources index file
    resourcesIndexFile.addExportDeclaration({
      moduleSpecifier: resourcesIndexFile.getRelativePathAsModuleSpecifierTo(resourceFile),
      namedExports: [resourceName]
    })
  }
}

await project.save()
