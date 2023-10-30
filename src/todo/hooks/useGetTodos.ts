import { useQuery } from "react-query";
import { TodoRepository } from "../entities/todoRepository";

function useGetTodos(todoRepository: TodoRepository) {
  const {
    data: todos = [],
    isLoading,
    error,
  } = useQuery(["todos"], () => todoRepository.getAll());

  return { todos, isLoading, error };
}

export default useGetTodos;
