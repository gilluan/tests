import { AppState } from "../reducers";
import { createSelector } from "@ngrx/store";
import * as fromTodoReducer from "./todo.reducer";


export const selectTodo = (state: AppState) => state.todo;

export const selectAllTodos = createSelector(
    selectTodo,
    (state: fromTodoReducer.TodoState) => state.todos
)