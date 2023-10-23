import { useMutation, useQueryClient } from "react-query";
import { Todo } from "../types/todo";
import { updateTodo } from "../services/todoService";

function useToggleTodo() {
  const queryClient = useQueryClient();

  const toggleTodoMutation = useMutation(["todos"], (todo: Todo) =>
    updateTodo(todo)
  );

  const toggleTodo = (todo: Todo) => {
    toggleTodoMutation.mutate(
      {
        ...todo,
        completed: !todo.completed,
      },
      {
        onSuccess: (updatedTodo) => {
          const currentTodos =
            queryClient.getQueryData<Todo[]>(["todos"]) || [];
          queryClient.setQueryData(
            ["todos"],
            currentTodos.map((todo: { id: number }) =>
              todo.id === updatedTodo.id ? updatedTodo : todo
            )
          );
        },
      }
    );
  };

  return { toggleTodo };
}

export default useToggleTodo;
