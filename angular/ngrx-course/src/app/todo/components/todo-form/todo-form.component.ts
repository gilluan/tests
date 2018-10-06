import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  @Output() addTodo: EventEmitter<string> = new EventEmitter<string>();

  public callAddTodo(text: string) {
    this.addTodo.emit(text);
  }

  constructor() { }

}
