import useDeleteTodo from "../hooks/useDeleteTodo";
import useToggleTodo from "../hooks/useToggleTodo";
import { LocalStorageTodoRepository } from "../infrastructure/localStorageTodoRepository";
import { Todo } from "../entities/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
}

const todoRepository = new LocalStorageTodoRepository();

function TodoList({ todos }: TodoListProps) {
  const { toggleTodo } = useToggleTodo(todoRepository);
  const { deleteTodo } = useDeleteTodo(todoRepository);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            title={todo.title}
            completed={todo.completed}
            onToggle={() => toggleTodo(todo)}
            onDelete={() => deleteTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
