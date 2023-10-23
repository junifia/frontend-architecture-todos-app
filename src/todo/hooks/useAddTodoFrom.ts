import { useState } from "react";

interface AddTodoFormProps {
  onAdd: (title: string) => void;
}

const useAddTodoForm = ({ onAdd }: AddTodoFormProps) => {
  const [title, setTitle] = useState<string>("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleAddTodo = () => {
    if (title.trim()) {
      onAdd(title.trim());
      clearTitle();
    }
  };

  const clearTitle = () => {
    setTitle("");
  };

  return {
    title,
    handleTitleChange,
    handleAddTodo,
  };
};

export default useAddTodoForm;
