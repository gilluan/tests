import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  AddTodo = '[Add Todo] Add Todos'
}

export class AddTodos implements Action {
  readonly type = TodoActionTypes.AddTodo;
  constructor(public payload: string){}
}

export type TodoActions = AddTodos;
