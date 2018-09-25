

import { Action } from '@ngrx/store';
import { IfStmt } from '@angular/compiler';
import { CounterActionsUnion, CounterActionTypes } from './counter.actions';

const initialState = 0;

export function counterReducer(state: number = initialState, action: CounterActionsUnion) {
    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return state + 1;
        case CounterActionTypes.DECREMENT:
            return state - 1;
        case CounterActionTypes.RESET:
            return action.payload;
        default:
            return state;
    }
}
