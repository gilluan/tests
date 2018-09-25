import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface State {
    counterReducer: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<State> = {
    counterReducer: fromCounter.counterReducer
};
