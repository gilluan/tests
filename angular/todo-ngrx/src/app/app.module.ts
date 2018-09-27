import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import * as fromTodo from './todo/todo.reducer';
import { TodoEffects } from './todo/todo.effects';
import { AddTodoComponent } from './todo/containers/add-todo/add-todo.component';
import { TodoListComponent } from './todo/containers/todo-list/todo-list.component';
import { TodoFilterComponent } from './todo/containers/todo-filter/todo-filter.component';
import { AddTodoFormComponent } from './todo/components/add-todo-form/add-todo-form.component';
import { LinkComponent } from './todo/components/link/link.component';
import { TodoItemComponent } from './todo/components/todo-item/todo-item.component';





@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoFilterComponent,
    AddTodoFormComponent,
    LinkComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature('todo', fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
