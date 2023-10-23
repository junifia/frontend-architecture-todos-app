import { useQuery } from "react-query";
import { getTodos } from "../services/todoService";

function useTodos() {
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery(["todos"], () => getTodos());

  return { todos, isLoading, error };
}

export default useTodos;
