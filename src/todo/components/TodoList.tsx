import { Todo } from "../entities/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            title={todo.title}
            completed={todo.completed}
            onToggle={() => onToggle(todo)}
            onDelete={() => onDelete(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
