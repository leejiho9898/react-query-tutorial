import axios from "axios";
import { useQuery } from "react-query";
import { Hero } from "type/type";
const fetchSuperHeros = async () => {
  const response = await axios.get("http://localhost:4000/superheroes");
  return response.data;
};
const useSuperHeroesData = (onSuccess: any, onError: any) => {
  return useQuery<Hero[], Error>("super-heros", fetchSuperHeros, {
    onSuccess,
    onError,
    staleTime: 5 * 60 * 1000,
    cacheTime: 5 * 60 * 1000,
    // select: (data: Hero[]) => {
    //   console.log(data);
    //   const superHeroNames = data.map((hero: any) => hero.name);
    //   return superHeroNames;
    // },
  });
};

export default useSuperHeroesData;
