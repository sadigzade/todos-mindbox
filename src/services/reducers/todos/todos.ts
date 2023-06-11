import { deleteCookie, getCookie, setCookie } from "../../../utils/cookie";
import { getInitialTodos } from "../../../utils/get-initial-todos";
import { TodoActions } from "../../actions/todos";
import {
  ADD_TODO,
  CLEAR_TODOS,
  DELETE_TODO,
  UPDATE_FILTER_STATUS,
  UPDATE_TODO,
} from "../../constants/todos";
import { TodoStatus, TodoTypes } from "../../types/data";

type TodoState = {
  filterStatus: TodoStatus;
  todoList: TodoTypes[];
};

const initialState: TodoState = getInitialTodos();

export const todosReducer = (state = initialState, action: TodoActions): TodoState => {
  switch (action.type) {
    case ADD_TODO: {
      const data = getCookie("todoList");

      if (data) {
        const todoList = JSON.parse(data);
        todoList.push(action.todo);
        setCookie("todoList", JSON.stringify(todoList));
      } else {
        setCookie("todoList", JSON.stringify([action.todo]));
      }

      return {
        ...state,
        todoList: [...state.todoList, action.todo],
      };
    }

    case DELETE_TODO: {
      const data = getCookie("todoList");

      if (data) {
        let todoList: TodoTypes[] = JSON.parse(data);
        todoList = todoList.filter((todo) => todo.id !== action.id);
        setCookie("todoList", JSON.stringify(todoList));

        return {
          ...state,
          todoList,
        };
      }

      return state;
    }

    case UPDATE_TODO: {
      const data = getCookie("todoList");
      console.log(action.updated);

      if (data) {
        const todoList: TodoTypes[] = JSON.parse(data);

        todoList.forEach((todo) => {
          if (todo.id === action.updated.id) {
            todo.status = action.updated.status;
          }
        });

        setCookie("todoList", JSON.stringify(todoList));

        return {
          ...state,
          todoList,
        };
      }

      return state;
    }

    case UPDATE_FILTER_STATUS: {
      return {
        ...state,
        filterStatus: action.status,
      };
    }

    case CLEAR_TODOS: {
      deleteCookie("todoList");

      return {
        ...state,
        todoList: [],
      };
    }

    default: {
      return state;
    }
  }
};
