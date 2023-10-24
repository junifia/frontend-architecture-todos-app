import { Todo } from "./types/todo";

export interface TodoRepository {
  getAll(): Promise<Todo[]>;
  create(title: string): Promise<Todo>;
  update(todo: Todo): Promise<Todo>;
  delete(id: string): Promise<void>;
}

