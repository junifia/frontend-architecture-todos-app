import { useMutation, useQueryClient } from "react-query";
import { Todo } from "../types/todo";
import { TodoRepository } from "../todoRepository";

function useAddTodo(todoRepository: TodoRepository) {
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation(["todos"], (todo: { title: string }) =>
    todoRepository.create(todo.title)
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
