import {
    Rule,
    SchematicContext,
    Tree,
    chain,
    externalSchematic
} from '@angular-devkit/schematics';

export function create(_options: any): Rule {

    // TODO: Alterar o options conforme o redux aqui

    return chain([
        externalSchematic('@schematics/angular', 'component', _options),
        (tree: Tree, _context: SchematicContext) => tree
    ]);
}
