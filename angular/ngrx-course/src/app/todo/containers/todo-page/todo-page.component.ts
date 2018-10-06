import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { AddTodos } from '../../actions/todo.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  todos$: Observable<any[]>;

  constructor(private store: Store<AppState>) { 
   // this.store.dispatch();
   
  }

  ngOnInit() {
  }

  addTodo(todo: string = "") {
    this.store.dispatch(new AddTodos(todo));
  }

}
