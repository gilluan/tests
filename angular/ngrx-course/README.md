# NgrxCourse

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Create a new action

```bash
ng g action todo/Todo --group
```

```javascript
import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  AddTodo = '[Add Todo] Add Todos'
}

export class AddTodos implements Action {
  readonly type = TodoActionTypes.AddTodo;
  constructor(private payload: string){}
}

export type TodoActions = AddTodos;
```
