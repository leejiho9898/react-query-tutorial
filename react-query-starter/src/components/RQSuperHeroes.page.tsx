import axios from "axios";
import { useQuery } from "react-query";
import { Hero } from "type/type";

const fetchSuperHeros = async () => {
  const response = await axios.get("http://localhost:4000/superheroes");
  return response.data;
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, error, isFetching } = useQuery<Hero[], Error>(
    "super-heros",
    fetchSuperHeros,
    { staleTime: 5 * 60 * 1000 }
  );

  console.log("isLoading : ", isLoading, "isFetching : ", isFetching);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error : {error.message}</h2>;
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      {data && data.map((hero) => <div key={hero.name}>{hero.name}</div>)}
    </>
  );
};

// staleTime :
// 더 길게 지정하면 staleTime쿼리가 데이터를 자주 다시 가져오지 않습니다.
// 기본값 : 0초 이유 : 0초가 안전해서

// cacheTime :
// 기본적으로 "비활성" 쿼리는 5분 후에 가비지 수집 됩니다.
// 이를 변경하려면 cacheTime쿼리 의 기본값 을 1000 60 5밀리초가 아닌 다른 값 으로 변경할 수 있습니다 .
