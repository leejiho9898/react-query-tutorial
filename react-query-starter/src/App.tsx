import { QueryClient, QueryClientProvider } from "react-query";
import { Link } from "react-router-dom";
import Routing from "routes/Routing";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import Path from "routes/Path";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={Path.SuperHeroesPage}>Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to={Path.RQSuperHeroesPage}>RQ Super Heroes</Link>
          </li>
          <li>
            <Link to={Path.ParallelQueruesPage}>Parallel Querues Page</Link>
          </li>
        </ul>
      </nav>
      <Routing />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
