import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import useAddTodo from "./hooks/useAddTodo";
import useTodos from "./hooks/useTodos";

function TodosPage() {
  const { todos, isLoading, error } = useTodos();
  const { addTodo } = useAddTodo();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <div className="container mx-auto my-8">
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodosPage;
