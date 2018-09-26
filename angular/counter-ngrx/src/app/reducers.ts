import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface State {
    counterReducer: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<State> = {
    counterReducer: fromCounter.counterReducer
};

export const selectCounter = (state: State) => state.counterReducer;

export const selectResult = createSelector(
    selectCounter,
    (state: fromCounter.CounterState) => state.counter
);
