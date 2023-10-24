import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import useAddTodo from "./hooks/useAddTodo";
import useTodos from "./hooks/useTodos";
import { LocalStorageTodoRepository } from "./localStorageTodoRepository";

const todoRepository = new LocalStorageTodoRepository();

function TodosPage() {
  const { todos, isLoading, error } = useTodos(todoRepository);
  const { addTodo } = useAddTodo(todoRepository);

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
