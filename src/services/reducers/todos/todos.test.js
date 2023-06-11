import {
  ADD_TODO,
  CLEAR_TODOS,
  DELETE_TODO,
  UPDATE_FILTER_STATUS,
  UPDATE_TODO,
} from "../../constants/todos";
import { TodoStatus } from "../../types/data";
import { todosReducer } from "./todos";

describe("todos reducer", () => {
  const todo = {
    id: "123",
    title: "React",
    status: TodoStatus.ACTIVE,
  };

  it("should return the initial state", () => {
    expect(todosReducer(undefined, {})).toEqual({
      filterStatus: TodoStatus.ALL,
      todoList: [],
    });
  });

  it("should handle ADD_TODO", () => {
    expect(
      todosReducer(
        {
          filterStatus: TodoStatus.ALL,
          todoList: [],
        },
        {
          type: ADD_TODO,
          todo,
        },
      ),
    ).toEqual({
      filterStatus: TodoStatus.ALL,
      todoList: [todo],
    });
  });

  it("should handle DELETE_TODO", () => {
    expect(
      todosReducer(
        {
          filterStatus: TodoStatus.ALL,
          todoList: [todo],
        },
        {
          type: DELETE_TODO,
          id: "123",
        },
      ),
    ).toEqual({
      filterStatus: TodoStatus.ALL,
      todoList: [],
    });
  });

  it("should handle UPDATE_FILTER_STATUS", () => {
    expect(
      todosReducer(
        {
          filterStatus: TodoStatus.ALL,
          todoList: [],
        },
        {
          type: UPDATE_FILTER_STATUS,
          status: TodoStatus.ACTIVE,
        },
      ),
    ).toEqual({
      filterStatus: TodoStatus.ACTIVE,
      todoList: [],
    });
  });

  it("should handle CLEAR_TODOS", () => {
    expect(
      todosReducer(
        {
          filterStatus: TodoStatus.ALL,
          todoList: [todo],
        },
        {
          type: CLEAR_TODOS,
        },
      ),
    ).toEqual({
      filterStatus: TodoStatus.ALL,
      todoList: [],
    });
  });
});
