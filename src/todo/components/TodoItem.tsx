import Checkbox from "./Checkbox";

interface TodoItemProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

function TodoItem({ title, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="todo-container">
      <div className="title-container">
        <Checkbox checked={completed} onChange={onToggle} />
        <span className={completed ? "title-completed" : "title-not-completed"}>
          {title}
        </span>
      </div>
      <button onClick={onDelete} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
