import { LocalStorageTodoRepository } from "../infrastructure/localStorageTodoRepository";
import { TodoRepository } from "../entities/todoRepository";

function useTodoRepository() {
  const todoRepository: TodoRepository = new LocalStorageTodoRepository();
  return { todoRepository };
}

export default useTodoRepository;
