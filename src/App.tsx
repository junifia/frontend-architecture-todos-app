import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import AppRouter from "./AppRouter";
import { routes } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter routes={routes} />
    </QueryClientProvider>
  );
}

export default App;
