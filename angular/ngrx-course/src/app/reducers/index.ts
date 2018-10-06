import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TodoActions, TodoActionTypes } from '../todo/actions/todo.actions';
import * as fromTodoReducer from '../todo/todo.reducer';

type AuthState = {
  loggedIn: boolean,
  user: any //Change to User Model
}



export interface AppState {
  auth: AuthState;
  todo: fromTodoReducer.TodoState;

}

export const reducers: ActionReducerMap<AppState> = {
  //need replace this
  auth: () => ({loggedIn: false , user: {}}),
  todo: fromTodoReducer.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
