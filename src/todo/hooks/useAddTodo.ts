import { useMutation, useQueryClient } from "react-query";
import { createTodo } from "../services/todoService";
import { Todo } from "../types/todo";

function useAddTodo() {
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation(["todos"], (todo: { title: string }) =>
    createTodo(todo)
  );

  const addTodo = (title: string) => {
    addTodoMutation.mutate(
      {
        title,
      },
      {
        onSuccess: (newTodo) => {
          const currentTodos =
            queryClient.getQueryData<Todo[]>(["todos"]) || [];
          queryClient.setQueryData(["todos"], [...currentTodos, newTodo]);
        },
      }
    );
  };

  return { addTodo };
}

export default useAddTodo;
