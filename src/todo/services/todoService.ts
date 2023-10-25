import { Todo } from "../entities/todo";

export const getTodos = async () => {
  const endpoint = "https://jsonplaceholder.typicode.com/todos";
  const response = await fetch(endpoint);
  const todos = await response.json();
  return todos;
};

export const createTodo = async (todo: { title: string }) => {
  const endpoint = "https://jsonplaceholder.typicode.com/todos";
  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const newTodo = await response.json();
  return newTodo;
};

export const updateTodo = async (todo: Todo) => {
  const endpoint = `https://jsonplaceholder.typicode.com/todos/${todo.id}`;
  const response = await fetch(endpoint, {
    method: "PUT",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const updatedTodo = await response.json();
  return updatedTodo;
};
