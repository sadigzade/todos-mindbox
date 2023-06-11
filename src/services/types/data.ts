export enum TodoStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  ALL = "ALL",
}

export type TodoTypes = {
  readonly id: string;
  title: string;
  status: TodoStatus;
};
