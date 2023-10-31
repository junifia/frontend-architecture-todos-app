import { TodoRepository } from "../entities/todoRepository";
import { Todo } from "../entities/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useDeleteTodo(todoRepository: TodoRepository) {
  const queryClient = useQueryClient();

  const handleMutationSuccess = (id: string) => {
    const currentTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
    const updatedTodos = currentTodos.filter((t) => t.id !== id);
    queryClient.setQueryData(["todos"], updatedTodos);
  };

  const deleteTodoMutation = useMutation({
    mutationKey: ["todos"],
    mutationFn: (id: string) => todoRepository.delete(id),
  });

  const deleteTodo = (id: string) => {
    deleteTodoMutation.mutate(id, {
      onSuccess: () => handleMutationSuccess(id),
    });
  };

  return { deleteTodo };
}

export default useDeleteTodo;
