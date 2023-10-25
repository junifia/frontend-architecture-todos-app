import { TodoRepository } from "../entities/todoRepository";
import { Todo } from "../entities/todo";

export class ApiTodoRepository implements TodoRepository {
  async getAll(): Promise<Todo[]> {
    const endpoint = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(endpoint);
    const todos: { id: number; title: string; completed: boolean }[] =
      await response.json();
    return todos.map(
      (todo: { id: number; title: string; completed: boolean }) => ({
        id: String(todo.id),
        title: todo.title,
        completed: todo.completed,
      })
    );
  }

  async create(title: string): Promise<Todo> {
    const endpoint = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({
        title,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const newTodo: { id: number; title: string; completed: boolean } =
      await response.json();
    return {
      id: String(newTodo.id),
      title: newTodo.title,
      completed: newTodo.completed,
    };
  }

  async update(todo: Todo): Promise<Todo> {
    const endpoint = `https://jsonplaceholder.typicode.com/todos/${todo.id}`;
    const response = await fetch(endpoint, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const updatedTodo: { id: number; title: string; completed: boolean } =
      await response.json();
    return {
      id: String(updatedTodo.id),
      title: updatedTodo.title,
      completed: updatedTodo.completed,
    };
  }

  async delete(id: string): Promise<void> {
    const endpoint = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const response = await fetch(endpoint, {
      method: "DELETE",
    });
    await response.json();
    return Promise.resolve();
  }
}
