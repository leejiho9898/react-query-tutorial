import axios from "axios";
import { QueryKey, useQuery } from "react-query";
import { Hero } from "type/type";

interface PropType {
  queryKey: QueryKey;
}
const fetchSuperHero = async ({ queryKey }: PropType) => {
  console.log(queryKey);
  const heroId = queryKey[1];
  const response = await axios.get(
    `http://localhost:4000/superheroes/${heroId}`
  );
  return response.data;
};

const useSuperHeroData = (heroId: string) => {
  return useQuery<Hero, Error>(["super-hero", heroId], fetchSuperHero);
};

export default useSuperHeroData;
