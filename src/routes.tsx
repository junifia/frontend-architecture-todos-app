import { RouteProps } from "react-router-dom";
import TodosPage from "./todo/TodosPage";

export const routes: RouteProps[] = [
  {
    path: "/",
    element: <TodosPage />,
  },
];
