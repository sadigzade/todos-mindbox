import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

import { useDispatch } from "../../../hooks/useDispatch";
import { updateTodo } from "../../../services/actions/todos";
import { TodoStatus, TodoTypes } from "../../../services/types/data";

import CheckButton from "./CheckButton/CheckButton";

const childVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

type TodoItemProps = {
  todo: TodoTypes;
  underline: boolean;
};

const TodosItem: FC<TodoItemProps> = ({ todo, underline }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? TodoStatus.ACTIVE : TodoStatus.COMPLETED,
      }),
    );
  };

  useEffect(() => {
    if (todo.status === TodoStatus.COMPLETED) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const cls = classNames(
    "text-[#4D4D4D]",
    "break-all",
    todo.status === TodoStatus.COMPLETED && "todo-completed",
  );

  return (
    <motion.div
      className={`flex items-center gap-2 p-4 ${underline ? "border-b" : ""}`}
      variants={childVariant}
    >
      <CheckButton checked={checked} handleCheck={handleCheck} />
      <p className={cls}>{todo.title}</p>
    </motion.div>
  );
};

export default TodosItem;
