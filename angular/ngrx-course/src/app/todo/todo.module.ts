import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoPageComponent } from './containers/todo-page/todo-page.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './todo.reducer';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature('todo', fromTodo.reducer),
  ],
  declarations: [TodoPageComponent, TodoFormComponent, TodoListComponent]
})
export class TodoModule { }
