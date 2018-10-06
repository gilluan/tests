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
* ng g action todo/Todo --group 
* ng g feature todo/Todo --reducers=../reducers/index.ts --group
* Na pasta todo/reducers criar o arquivo: index.ts
* ng g container todo/containers/FormTodoPage 
* ng g c todo/components/FormTodo -m todo/todo.module.ts
* ng g c todo/components/ListTodo -m todo/todo.module.ts
* criar o todo.model.ts



