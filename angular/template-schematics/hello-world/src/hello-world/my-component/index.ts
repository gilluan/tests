import { Rule, SchematicContext, Tree, apply, url, move, template, chain, branchAndMerge, mergeWith } from '@angular-devkit/schematics';
import {  strings } from '@angular-devkit/core';



// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function create(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log('_options', _options);

    const templateSrc = apply(url('./files'), [
        template({
            ...strings, ..._options
        }),
        move('./src/components')
    ]);

    return chain([
        branchAndMerge(
          chain([mergeWith(templateSrc)])
        ),
      ])(tree, _context);
  };
}
