import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, MetaReducer, ActionReducer, State } from '@ngrx/store';
import { AppComponent } from './app.component';
import { reducers } from './reducers';
import { CounterState } from './counter.reducer';

export interface StateApp {
    counterReducer: CounterState;
}

export const debug = (reducer: ActionReducer<any>): ActionReducer<any> => (state, action) => {
  console.log('state', state);
  console.log('action', action);
  return reducer(state, action);
};


// Similar aos middlewares usados no redux
export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      initialState: {
        counterReducer: {
          counter: 2
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
