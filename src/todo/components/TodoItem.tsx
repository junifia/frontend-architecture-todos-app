import { Todo } from "../types/todo";

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (todo: Todo) => void;
}

function TodoItem({ id, title, completed, onToggle }: TodoItemProps) {
  const handleCheckboxChange = () => {
    onToggle({ id, title, completed });
  };

  return (
    <div className="flex items-center justify-between p-4 border-b hover:bg-gray-50 transition-colors duration-200">
      <span
        className={`text-lg transition-colors duration-200 ${
          completed ? "line-through text-gray-400" : "text-black"
        }`}
      >
        {title}
      </span>
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
          className="h-5 w-5 accent-indigo-500 rounded focus:ring-indigo-200 focus:outline-none"
        />
      </label>
    </div>
  );
}

export default TodoItem;
