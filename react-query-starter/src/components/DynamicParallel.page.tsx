import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

const fetchSuperHeros = async (heroId: number) => {
  const response = await axios.get(
    `http://localhost:4000/superheroes/${heroId}`
  );
  return response.data;
};

interface PropsType {
  heroIds: Array<number>;
}
const DynamicParallelPage = ({ heroIds }: PropsType) => {
  const queryResults = useQueries(
    heroIds.map((id, index) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHeros(id),
      };
    })
  );
  console.log(queryResults);
  return <h2>DynamicParallelPage</h2>;
};

export default DynamicParallelPage;
