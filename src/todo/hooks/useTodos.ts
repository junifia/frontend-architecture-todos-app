import useAddTodo from "./useAddTodo";
import useDeleteTodo from "./useDeleteTodo";
import useGetTodos from "./useGetTodos";
import useTodoRepository from "./useTodoRepository";
import useToggleTodo from "./useToggleTodo";

function useTodos() {
  const { todoRepository } = useTodoRepository();
  const { todos, isLoading, error } = useGetTodos(todoRepository);
  const { addTodo } = useAddTodo(todoRepository);
  const { toggleTodo } = useToggleTodo(todoRepository);
  const { deleteTodo } = useDeleteTodo(todoRepository);
  return { todos, isLoading, error, addTodo, toggleTodo, deleteTodo };
}

export default useTodos;
