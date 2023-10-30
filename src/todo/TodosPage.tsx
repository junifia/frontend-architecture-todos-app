import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";

function TodosPage() {
  const { todos, isLoading, error, addTodo, toggleTodo, deleteTodo } =
    useTodos();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <div className="container mx-auto p-12">
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default TodosPage;
