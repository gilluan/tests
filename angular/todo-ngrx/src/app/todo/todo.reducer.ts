import { Action } from '@ngrx/store';
import { TodoActions, TodoActionTypes } from './todo.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: TodoActions): State {
  switch (action.type) {

    case TodoActionTypes.LoadTodos:
      return state;


    default:
      return state;
  }
}
