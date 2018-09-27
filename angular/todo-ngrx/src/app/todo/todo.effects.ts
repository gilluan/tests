import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodoActionTypes } from './todo.actions';

@Injectable()
export class TodoEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(TodoActionTypes.LoadTodos));

  constructor(private actions$: Actions) {}
}
