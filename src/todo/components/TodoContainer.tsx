import useDeleteTodo from "../hooks/useDeleteTodo";
import useToggleTodo from "../hooks/useToggleTodo";
import { LocalStorageTodoRepository } from "../localStorageTodoRepository";
import TodoItem from "./TodoItem";

interface TodoContainerProps {
  id: string;
  title: string;
  completed: boolean;
}

const todoRepository = new LocalStorageTodoRepository();

function TodoContainer({ id, title, completed }: TodoContainerProps) {
  const { toggleTodo } = useToggleTodo(todoRepository);
  const { deleteTodo } = useDeleteTodo(todoRepository);

  return (
    <TodoItem
      id={id}
      title={title}
      completed={completed}
      onToggle={toggleTodo}
      onDelete={deleteTodo}
    />
  );
}

export default TodoContainer;
