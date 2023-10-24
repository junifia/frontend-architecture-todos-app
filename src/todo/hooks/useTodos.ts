import { useQuery } from "react-query";
import { TodoRepository } from "../todoRepository";
import useAddTodo from "./useAddTodo";

function useTodos(todoRepository: TodoRepository) {
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery(["todos"], () => todoRepository.getAll());
  const { addTodo } = useAddTodo(todoRepository);

  if (!todos) {
    return { todos: [], isLoading, error };
  }

  return { todos, addTodo, isLoading, error };
}

export default useTodos;
