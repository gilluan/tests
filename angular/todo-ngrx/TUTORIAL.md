# TUTORIAL

## Step 1 - Create a angular app
ng new [APP_NAME] --routing

## Step 2 - Install @ngrx/schematics from npm
npm install @ngrx/schematics --save-dev

## Step 3 - Install NgRx dependencies
npm install @ngrx/store --save
npm install @ngrx/store-devtools --save
npm install @ngrx/effects --save
npm install @ngrx/entity --save


## Step 4 - Add @ngrx/schematics collection in angular.json
ng config cli.defaultCollection @ngrx/schematics

## Step 5 - Configure  @ngrx/schematics as a default schematics in angular.json

```javascript
"schematics": {
    "@ngrx/schematics:component": {
        "styleext": "scss"
    }
}
```

## Step 6 - Initial State Setup
ng generate @ngrx/schematics:store State --root --module app.module.ts

## Step 7 - Initial Effects Setup
ng generate @ngrx/schematics:effect App --root --module app.module.ts

## Step 8 - Generate a new feature
ng generate feature Todo -m app.module.ts --flat false

## Step 9 - Generate container components
ng generate container todo/containers/AddTodo
ng generate container todo/containers/TodoList
ng generate container todo/containers/TodoFilter

## Step 10 - Generate presentation components
ng g c todo/components/addTodoForm
ng g c todo/components/todoList
ng g c todo/components/link
ng g c todo/components/todoItem