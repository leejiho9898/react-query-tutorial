import axios from "axios";
import { QueryKey, useQuery, useQueryClient } from "react-query";
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
  const queryClient = useQueryClient();
  return useQuery<any, Error>(["super-hero", heroId], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData<Hero[]>("super-heroes")
        ?.find((hero) => hero.id === parseInt(heroId));
      return { data: hero };
    // 다른 쿼리의 캐쉬된 결과에서 해당 쿼리의 초기 데이터를  가져옴
    // 여기서는 super-heroes의 캐싱된 결과로 초기값을 설정해 Loading을 없엤음
    },
  });
};

export default useSuperHeroData;