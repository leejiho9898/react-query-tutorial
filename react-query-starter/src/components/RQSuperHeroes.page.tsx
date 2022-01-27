import axios from "axios";
import { useQuery } from "react-query";
import { Hero } from "type/type";

const fetchSuperHeros = async () => {
  const response = await axios.get("http://localhost:4000/superheroes");
  return response.data;
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data, error } = useQuery<Hero[], Error>(
    "super-heros",
    fetchSuperHeros,
    { cacheTime: 5 * 60 * 1000 }
  );

  console.log(data);

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
