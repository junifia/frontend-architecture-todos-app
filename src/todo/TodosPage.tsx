import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import useAddTodo from "./hooks/useAddTodo";
import useTodos from "./hooks/useTodos";
import { LocalStorageTodoRepository } from "./infrastructure/localStorageTodoRepository";

const todoRepository = new LocalStorageTodoRepository();

function TodosPage() {
  const { todos, isLoading, error } = useTodos(todoRepository);
  const { addTodo } = useAddTodo(todoRepository);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <div className="container mx-auto p-12">
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodosPage;
