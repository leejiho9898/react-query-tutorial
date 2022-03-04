import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Hero } from "type/type";
const fetchSuperHeros = async () => {
  const response = await axios.get("http://localhost:4000/superheroes");
  return response.data;
};

const addSuperHero = async (hero: Hero) => {
  const response = await axios.post("http://localhost:4000/superheroes", hero);
  return response.data;
};
export const useSuperHeroesData = (onSuccess: any, onError: any) => {
  return useQuery<Hero[], Error>("super-heroes", fetchSuperHeros, {
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

export const useAddSuperHeroesData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      queryClient.setQueryData<any>("super-heroes", (oldData: any) => {
        return {
          ...oldData,
          newData: [...oldData, data],
        };
      });
      queryClient.invalidateQueries("super-heroes");
    },
  });
};
