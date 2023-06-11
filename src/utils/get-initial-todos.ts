import { TodoStatus, TodoTypes } from "../services/types/data";
import { getCookie, setCookie } from "./cookie";

export const getInitialTodos = () => {
  const data = getCookie("todoList");
  const todoList: TodoTypes[] = data ? JSON.parse(data) : [];

  if (!data) {
    setCookie("todoList", JSON.stringify([]));
  }

  return {
    filterStatus: TodoStatus.ALL,
    todoList,
  };
};
