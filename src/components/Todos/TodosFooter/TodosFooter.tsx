import React from "react";
import { TodoStatus } from "../../../services/types/data";
import StatusButton from "./StatusButton/StatusButton";
import { useDispatch } from "../../../hooks/useDispatch";
import { clearTodos } from "../../../services/actions/todos";
import { useSelector } from "../../../hooks/useSelector";

const statuses = [TodoStatus.ALL, TodoStatus.ACTIVE, TodoStatus.COMPLETED];

const TodosFooter = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todoList);
  const countActive = todoList.reduce((acc, todo) => {
    if (todo.status === TodoStatus.ACTIVE) {
      return acc + 1;
    }

    return acc;
  }, 0);

  const handleClear = () => {
    dispatch(clearTodos());
  };

  return (
    <div className="flex items-center justify-between p-4 border-t">
      <span className="text-[#8F8F8F]">{countActive ? `${countActive} items left` : "Empty"}</span>
      <div className="flex items-center gap-3">
        {statuses.map((status, index) => (
          <StatusButton key={index} status={status} />
        ))}
      </div>
      <button id="clear" className="text-[#8F8F8F]" onClick={handleClear}>
        Clear completed
      </button>
    </div>
  );
};

export default TodosFooter;
