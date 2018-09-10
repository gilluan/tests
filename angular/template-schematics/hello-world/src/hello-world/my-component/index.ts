import { Rule, SchematicContext, Tree, apply, url } from '@angular-devkit/schematics';
import { template } from '@angular-devkit/core';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function create(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log('_options', _options);
 //   tree.create('test.txt', 'Hello World!');
    return tree;
  };
}
