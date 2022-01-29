import { useState, useEffect } from "react";
import axios from "axios";
import { Hero } from "type/type";

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Hero[]>([]);

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

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
