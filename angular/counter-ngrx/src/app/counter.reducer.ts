

import { Action } from '@ngrx/store';
import { IfStmt } from '@angular/compiler';
import { CounterActionsUnion, CounterActionTypes } from './counter.actions';

export interface CounterState {
    counter: number;
}

const counterInitialState: CounterState = {
    counter: 3
};

export function counterReducer(state: CounterState = counterInitialState, action: CounterActionsUnion): CounterState {
    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return { counter: state.counter + 1 };
        case CounterActionTypes.DECREMENT:
            return { counter: state.counter - 1 };
        case CounterActionTypes.RESET:
            return { counter: action.payload };
        default:
            return state;
    }
}
