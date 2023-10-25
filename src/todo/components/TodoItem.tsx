interface TodoItemProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

function TodoItem({ title, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b hover:bg-gray-50 transition-colors duration-200">
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={completed}
            onChange={onToggle}
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
      <button
        onClick={onDelete}
        className="bg-red-600 hover:bg-red-400 px-2 py-1 rounded-md text-white transition-colors duration-200"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
