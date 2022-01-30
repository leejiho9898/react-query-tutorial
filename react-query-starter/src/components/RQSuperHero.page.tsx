import useSuperHeroData from "hooks/useHeroData";
import { useParams } from "react-router-dom";

const RQSuperHeroPage = () => {
  const { heroId } = useParams<{ heroId: string }>();
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
