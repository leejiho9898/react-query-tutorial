import DependentQueriesPage from "components/DependentQueries.page";
import DynamicParallelPage from "components/DynamicParallel.page";
import { HomePage } from "components/Home.page";
import { InfiniteQueriesPage } from "components/InfiniteQueries.page";
import { PaginatedQueriesPage } from "components/PagenatedQueries.page";
import { ParallelQueriesPage } from "components/ParallelQueries.page";
import RQSuperHeroPage from "components/RQSuperHero.page";
import RQSuperHeroesPage from "components/RQSuperHeroes.page";
import { SuperHeroesPage } from "components/SuperHeroes.page";
import { Route, Routes } from "react-router-dom";
import Path from "./Path";

function Routing() {
  return (
    <Routes>
      <Route path={Path.HomePage} element={<HomePage />} />
      <Route path={Path.SuperHeroesPage} element={<SuperHeroesPage />} />
      <Route path={Path.RQSuperHeroesPage} element={<RQSuperHeroesPage />} />
      <Route path={Path.RQSuperHeroPage} element={<RQSuperHeroPage />} />
      <Route
        path={Path.ParallelQueruesPage}
        element={<ParallelQueriesPage />}
      />
      <Route
        path={Path.RQDynamicParallelPage}
        element={<DynamicParallelPage heroIds={[1, 2, 3]} />}
      />
      <Route
        path={Path.DependentQueriesPage}
        element={<DependentQueriesPage email="email@email.com" />}
      />
      <Route
        path={Path.PagenatedQueriesPage}
        element={<PaginatedQueriesPage />}
      />
      <Route
        path={Path.InfiniteQueriesPage}
        element={<InfiniteQueriesPage />}
      />
    </Routes>
  );
}

export default Routing;
