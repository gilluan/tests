import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { AddTodos } from '../../actions/todo.actions';
import { Observable } from 'rxjs';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import {map } from 'rxjs/operators'
import { TodoState } from '../../todo.reducer';
import { selectAllTodos } from '../../todo.selectors';
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  todos$: Observable<any>;

  constructor(private store: Store<AppState>) { 
   // this.store.dispatch();
   this.todos$ = this.store
   .pipe(
     select(selectAllTodos)
   )
  }

  ngOnInit() {
  }

  addTodo(todo: string = "") {
    this.store.dispatch(new AddTodos(todo));
  }

}
