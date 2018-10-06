import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoPageComponent } from './containers/todo-page/todo-page.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  declarations: [TodoPageComponent, TodoFormComponent, TodoListComponent]
})
export class TodoModule { }
