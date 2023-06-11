import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
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

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (title !== "") {
      dispatch(addTodo({ id: uuid(), title, status: TodoStatus.ACTIVE }));
      setTitle("");
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit} className="border-b relative">
      <button
        id="add-btn"
        className={`w-7 h-7 absolute top-[13px] left-[12px] rounded-sm border-solid transition ${
          title !== "" ? "border" : ""
        }`}
        onClick={handleClick}
      />
      <input
        id="input-record"
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
