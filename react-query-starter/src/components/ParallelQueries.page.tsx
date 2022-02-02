import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeros = async () => {
  const response = await axios.get(`http://localhost:4000/superheroes`);
  console.log(response);
  return response.data;
};

const fetchFriends = async () => {
  const response = await axios.get(`http://localhost:4000/friends`);
  return response.data;
};

export const ParallelQueriesPage = () => {
  const { data: superHeros } = useQuery("super-heros", fetchSuperHeros);

  const { data: friends } = useQuery("friends", fetchFriends);
  return <div>ParallelQueriesPage</div>;
};
