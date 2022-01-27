import { useState, useEffect } from "react";
import axios from "axios";

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<
    { id: number; name: string; alterEgo: string }[]
  >([]);
  console.log(isLoading);

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
      console.log(isLoading);
      console.log(data);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero) => {
        return <div>{hero.name}</div>;
      })}
    </>
  );
};
