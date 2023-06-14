import {
  ADD_TODO,
  CLEAR_COMPLITED_TODOS,
  DELETE_TODO,
  UPDATE_FILTER_STATUS,
  UPDATE_TODO,
} from "../constants/todos";
import { TodoStatus, TodoTypes } from "../types/data";

type AddTodoAction = {
  readonly type: typeof ADD_TODO;
  readonly todo: Readonly<TodoTypes>;
};
type DeleteTodoAction = {
  readonly type: typeof DELETE_TODO;
  readonly id: string;
};
type UpdateTodoAction = {
  readonly type: typeof UPDATE_TODO;
  readonly updated: Readonly<TodoTypes>;
};
type UpdateFilterStatusAction = {
  readonly type: typeof UPDATE_FILTER_STATUS;
  readonly status: TodoStatus;
};
type ClearTodos = {
  readonly type: typeof CLEAR_COMPLITED_TODOS;
};

export type TodoActions =
  | AddTodoAction
  | DeleteTodoAction
  | UpdateTodoAction
  | UpdateFilterStatusAction
  | ClearTodos;

export const addTodo = (todo: Readonly<TodoTypes>): AddTodoAction => {
  return {
    type: ADD_TODO,
    todo,
  };
};

export const deleteTodo = (id: string): DeleteTodoAction => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const updateTodo = (updated: Readonly<TodoTypes>): UpdateTodoAction => {
  return {
    type: UPDATE_TODO,
    updated,
  };
};

export const updateFilterStatus = (status: TodoStatus): UpdateFilterStatusAction => {
  return {
    type: UPDATE_FILTER_STATUS,
    status,
  };
};

export const clearComplitedTodos = () => {
  return {
    type: CLEAR_COMPLITED_TODOS,
  };
};
