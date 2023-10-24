import { useMutation, useQueryClient } from "react-query";
import { TodoRepository } from "../todoRepository";
import { Todo } from "../types/todo";

function useDeleteTodo(todoRepository: TodoRepository) {
  const queryClient = useQueryClient();

  const deleteTodoMutation = useMutation(["todos"], (id: string) =>
    todoRepository.delete(id)
  );

  const deleteTodo = (id: string) => {
    deleteTodoMutation.mutate(id, {
      onSuccess: () => {
        const currentTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
        queryClient.setQueryData(
          ["todos"],
          currentTodos.filter((todo: Todo) => todo.id !== id)
        );
      },
    });
  };

  return { deleteTodo };
}

export default useDeleteTodo;
