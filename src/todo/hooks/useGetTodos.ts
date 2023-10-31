import { useQuery } from "@tanstack/react-query";
import { TodoRepository } from "../entities/todoRepository";

function useGetTodos(todoRepository: TodoRepository) {
  const {
    data: todos = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ["todos"], queryFn: () => todoRepository.getAll() });

  return { todos, isLoading, error };
}

export default useGetTodos;
