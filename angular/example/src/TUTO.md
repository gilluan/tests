<!--- Tools --->
vscode
npm
chrome devtools


<!--- Para criar a aplicação --->
* ng new app-name --routing
* npm i @ngrx/schematics --save-dev
* npm i @ngrx/{store, effects, entity, store-devtools} --save
* ng config cli.defaultCollection @ngrx/schematics
* ng generate @ngrx/schematics:store State --root --module app.module.ts
* ng g @ngrx/schematics:effect App --root --module app.module.ts


<!--- Para implementar a funcionalidade --->
* ng g module todo --routing
* ng g store heroes/Heroes -m heroes.module.ts
//this or
* ng g action todo/Todo --group 
* ng g reducer Todo --flat=false --module todo/todo.module.ts
//that
* ng g feature todo/Todo --reducers=../reducers/index.ts --group

* ng g container todo/containers/FormTodoPage 
* ng g c todo/components/FormTodo -m todo/todo.module.ts
* ng g c todo/components/ListTodo -m todo/todo.module.ts
* criar o todo.model.ts



