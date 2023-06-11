import React, { FC } from "react";
import { useSelector } from "../../../../hooks/useSelector";
import { TodoStatus } from "../../../../services/types/data";
import { useDispatch } from "../../../../hooks/useDispatch";
import { updateFilterStatus } from "../../../../services/actions/todos";
import { lowerStatus } from "../../../../utils/lower-status";

type StatusButtonProps = {
  status: TodoStatus;
};

const StatusButton: FC<StatusButtonProps> = ({ status }) => {
  const filterStatus = useSelector((state) => state.todos.filterStatus);
  const dispatch = useDispatch();

  const handleChangeStatus = (status: TodoStatus) => {
    dispatch(updateFilterStatus(status));
  };

  return (
    <button
      id={status}
      className={`text-[#8F8F8F] px-2 border border-solid rounded-sm transition border-hover ${
        filterStatus === status ? "border-[#EBD7D7]" : "border-transparent"
      }`}
      onClick={() => handleChangeStatus(status)}
    >
      {lowerStatus(status)}
    </button>
  );
};

export default StatusButton;
