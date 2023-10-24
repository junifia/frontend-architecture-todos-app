import { useMutation, useQueryClient } from "react-query";
import { Todo } from "../types/todo";
import { TodoRepository } from "../todoRepository";

function useToggleTodo(todoRepository: TodoRepository) {
  const queryClient = useQueryClient();

  const toggleTodoMutation = useMutation(["todos"], (todo: Todo) =>
    todoRepository.update(todo)
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
            currentTodos.map((todo: { id: string }) =>
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
