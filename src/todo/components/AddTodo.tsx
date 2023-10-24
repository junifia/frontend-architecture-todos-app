import useAddTodoForm from "../hooks/useAddTodoFrom";

interface AddTodoProps {
  onAdd: (title: string) => void;
}

function AddTodo({ onAdd }: AddTodoProps) {
  const { title, handleTitleChange, handleFormSubmit } = useAddTodoForm({
    onAdd,
  });

  return (
    <form onSubmit={handleFormSubmit} className="flex items-center space-x-4">
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Type something..."
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 transition-shadow"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-200 transition-shadow"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
