import useToggleTodo from "../hooks/useToggleTodo";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
}

function TodoList({ todos }: TodoListProps) {
  const { toggleTodo } = useToggleTodo();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggle={toggleTodo}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
