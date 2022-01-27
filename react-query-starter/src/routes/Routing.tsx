import { HomePage } from "components/Home.page";
import { RQSuperHeroesPage } from "components/RQSuperHeroes.page";
import { SuperHeroesPage } from "components/SuperHeroes.page";
import { Route, Routes } from "react-router-dom";
import Path from "./Path";

function Routing() {
  return (
    <Routes>
      <Route path={Path.HomePage} element={<HomePage />} />
      <Route path={Path.SuperHeroesPage} element={<SuperHeroesPage />} />
      <Route path={Path.RQSuperHeroesPage} element={<RQSuperHeroesPage />} />
    </Routes>
  );
}

export default Routing;
