import { Action } from '@ngrx/store';
import { TodoActionTypes, TodoActions } from './actions/todo.actions';


export interface TodoState {
 todos?: string[]
}

export const initialState: TodoState =  {todos: []};



export function reducer(state: TodoState = initialState, action: TodoActions): TodoState {
  console.log('sdf',action);
  switch(action.type) {
    case TodoActionTypes.AddTodo: 
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    default: 
      return state;

  }
}
