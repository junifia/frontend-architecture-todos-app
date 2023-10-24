import { Todo } from "../types/todo";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

function TodoItem({ id, title, completed, onToggle, onDelete }: TodoItemProps) {
  const handleCheckboxChange = () => {
    onToggle({ id, title, completed });
  };

  const handleDelete = () => {
    onDelete(id);
  }

  return (
    <div className="flex items-center justify-between p-4 border-b hover:bg-gray-50 transition-colors duration-200">
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleCheckboxChange}
            className="h-5 w-5 hover:cursor-pointer accent-indigo-500 focus:ring-indigo-200 focus:outline-none"
          />
        </label>
        <span
          className={`text-lg transition-colors duration-200 ${
            completed ? "line-through text-gray-400" : "text-black"
          }`}
        >
          {title}
        </span>
      </div>
      <button onClick={handleDelete} className="bg-red-600 hover:bg-red-400 px-2 py-1 rounded-md text-white transition-colors duration-200">
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
