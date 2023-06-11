import { TodoStatus } from "../services/types/data";

export const lowerStatus = (status: TodoStatus) => {
  return status[0] + status.slice(1).toLowerCase();
};
