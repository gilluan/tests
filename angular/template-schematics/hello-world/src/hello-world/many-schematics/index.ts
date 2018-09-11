import {
    Rule,
    SchematicContext,
    Tree,
    chain,
    externalSchematic
} from '@angular-devkit/schematics';

export function create(_options: {name: string}): Rule {

    // TODO: Alterar o options conforme o redux aqui
    console.log('_options', _options);
     _options.name = 'sc-' + _options.name;

    return chain([
        externalSchematic('@schematics/angular', 'component', _options),
        (tree: Tree, _context: SchematicContext) => {
            console.log('tree', tree);
            console.log('_context', _context);
            return tree;
        }
    ]);
}
