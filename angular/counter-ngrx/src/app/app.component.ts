import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as CounterActions from './counter.actions';
import { CounterState } from './counter.reducer';
import { StateApp } from './app.module';


@Component({
  selector: 'app-root',
  template: `
    <!-- Show Attribute from Observable on html -->
    <div>Current Count: {{ (count$ | async )?.counter }}</div>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset Counter</button>
  `
})
export class AppComponent {
  count$: Observable<CounterState>;

  constructor(private store: Store<CounterState>) {
    this.count$ = store.pipe(select('counterReducer'));
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
