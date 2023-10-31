import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../entities/todo";
import { TodoRepository } from "../entities/todoRepository";

function useToggleTodo(todoRepository: TodoRepository) {
  const queryClient = useQueryClient();

  const handleMutationSuccess = (todo: Todo) => {
    const currentTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
    const updatedTodos = currentTodos.map((t) => (t.id === todo.id ? todo : t));
    queryClient.setQueryData(["todos"], updatedTodos);
  };

  const toggleTodoMutation = useMutation({
    mutationKey: ["todos"],
    mutationFn: (todo: Todo) => todoRepository.update(todo),
  });

  const toggleTodo = (todo: Todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    toggleTodoMutation.mutate(updatedTodo, {
      onSuccess: () => handleMutationSuccess(updatedTodo),
    });
  };

  return { toggleTodo };
}

export default useToggleTodo;
