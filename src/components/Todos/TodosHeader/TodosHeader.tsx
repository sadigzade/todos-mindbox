import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "../../../hooks/useDispatch";
import { addTodo } from "../../../services/actions/todos";
import { TodoStatus } from "../../../services/types/data";

const TodosHeader = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title !== "") {
      dispatch(addTodo({ id: uuid(), title, status: TodoStatus.ACTIVE }));
      setTitle("");
    }
  };

  const handleClick = () => {
    if (title !== "") {
      dispatch(addTodo({ id: uuid(), title, status: TodoStatus.ACTIVE }));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-b relative">
      <button className="w-8 h-8 absolute top-3 left-[10px]" onClick={handleClick} />
      <input
        className="w-full placeholder:italic focus:outline-none svg-input-before"
        type="text"
        value={title}
        placeholder="What needs to be done?"
        onChange={handleChange}
      />
    </form>
  );
};

export default TodosHeader;
