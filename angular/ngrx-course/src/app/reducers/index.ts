import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TodoActions, TodoActionTypes } from '../todo/actions/todo.actions';

type AuthState = {
  loggedIn: boolean,
  user: any //Change to User Model
}

type TodoState = {
  todos?: string[]
}

export interface AppState {
  auth: AuthState;
  todo: TodoState;

}

export const reducers: ActionReducerMap<AppState> = {
  //need replace this
  auth: () => ({loggedIn: false , user: {}}),
  todo: (state: TodoState = {todos: []}, action: any): TodoState => {
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
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
