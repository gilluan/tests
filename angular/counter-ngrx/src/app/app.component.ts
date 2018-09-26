import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as CounterActions from './counter.actions';
import { CounterState } from './counter.reducer';
import { selectResult, selectCounter } from './reducers';
import { StateApp } from './app.module';


@Component({
  selector: 'app-root',
  template: `
    <!-- Show Attribute from Observable on html -->
    <div>Current Count: {{ (count$ | async )?.counter }}</div>
    <div>Current Count Selector: {{ (countSelector$ | async )?.counter }}</div>
    <div>Current Count Selector Result: {{ (countSelectorResult$ | async ) }}</div>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset Counter</button>
  `
})
export class AppComponent {
  count$: Observable<CounterState>;
  countSelector$: Observable<any>;
  countSelectorResult$: Observable<number>;

  constructor(private store: Store<StateApp>) {
    this.count$ = store.pipe(select('counterReducer'));
    this.countSelector$ = store.pipe(select(selectCounter));
    this.countSelectorResult$ = store.pipe(select(selectResult));
  }

  increment() {
    this.store.dispatch(new CounterActions.Increment());
  }

  decrement() {
    this.store.dispatch(new CounterActions.Decrement());
  }

  reset() {
    this.store.dispatch(new CounterActions.Reset(2));
  }

}
