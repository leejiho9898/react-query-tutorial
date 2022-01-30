import { HomePage } from "components/Home.page";
import RQSuperHeroPage from "components/RQSuperHero.page";
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
      <Route path={Path.RQSuperHeroPage} element={<RQSuperHeroPage />} />
    </Routes>
  );
}

export default Routing;
