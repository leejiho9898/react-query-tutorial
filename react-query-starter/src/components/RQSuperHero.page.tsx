import useSuperHeroData from "hooks/useHeroData";
import { useState } from "react";
import { useParams } from "react-router-dom";

interface IParams {
  heroId: string;
}

const RQSuperHeroPage = () => {
  const { heroId } = useParams<keyof IParams>() as IParams;
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error?.message}</h2>;
  }

  return (
    <div>
      {data?.name} - {data?.alterEgo}
    </div>
  );
};

export default RQSuperHeroPage;
