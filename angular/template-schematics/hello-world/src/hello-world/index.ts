import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function helloWorld(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    if (tree.exists('test.txt')) {
      console.log(true);
      tree.delete('/test.txt');
    } else {
      console.log(false);
    }
    console.log('_options', _options);
 //   tree.create('test.txt', 'Hello World!');
    return tree;
  };
}
