import axios from "axios";
import { useQuery } from "react-query";
import { Hero } from "type/type";

const fetchSuperHero = async (heroId: any) => {
  const response = await axios.get(
    `http://localhost:4000/superheroes/${heroId}`
  );
  return response.data;
};

const useSuperHeroData = (heroId: any) => {
  return useQuery<Hero, Error>(["super-hero", heroId], () =>
    fetchSuperHero(heroId)
  );
};

export default useSuperHeroData;
