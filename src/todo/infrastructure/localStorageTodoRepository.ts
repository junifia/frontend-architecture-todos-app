import { TodoRepository } from "../entities/todoRepository";
import { Todo } from "../entities/todo";

export class LocalStorageTodoRepository implements TodoRepository {
  private STORAGE_KEY = "todos";

  async getAll(): Promise<Todo[]> {
    const todos = localStorage.getItem(this.STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
  }

  async create(title: string): Promise<Todo> {
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
    return newTodo;
  }

  async update(todo: Todo): Promise<Todo> {
    const todos = localStorage.getItem(this.STORAGE_KEY);
    const parsedTodos = todos ? JSON.parse(todos) : [];
    const updatedTodos = parsedTodos.map((t: Todo) =>
      t.id === todo.id ? todo : t
    );
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedTodos));
    return todo;
  }

  async delete(id: string): Promise<void> {
    const todos = localStorage.getItem(this.STORAGE_KEY);
    const parsedTodos = todos ? JSON.parse(todos) : [];
    const updatedTodos = parsedTodos.filter(
      (t: Todo) => t.id.toString() !== id
    );
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedTodos));
  }
}
