import { useQuery } from "react-query";
import { TodoRepository } from "../entities/todoRepository";

function useTodos(todoRepository: TodoRepository) {
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery(["todos"], () => todoRepository.getAll());

  if (!todos) {
    return { todos: [], isLoading, error };
  }

  return { todos, isLoading, error };
}

export default useTodos;
