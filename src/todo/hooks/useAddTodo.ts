import { useMutation, useQueryClient } from "react-query";
import { Todo } from "../entities/todo";
import { TodoRepository } from "../entities/todoRepository";

function useAddTodo(todoRepository: TodoRepository) {
  const queryClient = useQueryClient();

  const handleMutationSuccess = (todo: Todo) => {
    const currentTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
    queryClient.setQueryData(["todos"], [...currentTodos, todo]);
  };

  const addTodoMutation = useMutation(["todos"], (todo: { title: string }) =>
    todoRepository.create(todo.title)
  );

  const addTodo = (title: string) => {
    addTodoMutation.mutate(
      {
        title,
      },
      {
        onSuccess: (createdTodo) => handleMutationSuccess(createdTodo),
      }
    );
  };

  return { addTodo };
}

export default useAddTodo;
