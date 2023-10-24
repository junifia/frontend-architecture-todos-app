import { TodoRepository } from "./todoRepository";
import { Todo } from "./types/todo";

export class LocalStorageTodoRepository implements TodoRepository {
  private STORAGE_KEY = "todos";

  getAll(): Promise<Todo[]> {
    const todos = localStorage.getItem(this.STORAGE_KEY);
    return Promise.resolve(todos ? JSON.parse(todos) : []);
  }

  create(title: string): Promise<Todo> {
    const todos = localStorage.getItem(this.STORAGE_KEY);
    const parsedTodos = todos ? JSON.parse(todos) : [];
    const newTodo: Todo = {
      id: new Date().toISOString(),
      title,
      completed: false,
    };
    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify([...parsedTodos, newTodo])
    );
    return Promise.resolve(newTodo);
  }

  update(todo: Todo): Promise<Todo> {
    const todos = localStorage.getItem(this.STORAGE_KEY);
    const parsedTodos = todos ? JSON.parse(todos) : [];
    const updatedTodos = parsedTodos.map((t: Todo) =>
      t.id === todo.id ? todo : t
    );
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedTodos));
    return Promise.resolve(todo);
  }

  delete(id: string): Promise<void> {
    const todos = localStorage.getItem(this.STORAGE_KEY);
    const parsedTodos = todos ? JSON.parse(todos) : [];
    const updatedTodos = parsedTodos.filter((t: Todo) => t.id.toString() !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedTodos));
    return Promise.resolve();
  }
}
