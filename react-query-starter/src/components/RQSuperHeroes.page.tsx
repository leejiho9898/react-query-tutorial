import { useAddSuperHeroesData, useSuperHeroesData } from "hooks/useHeroesData";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "type/type";

export default function RQSuperHeroesPage() {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const onSuccess = (data: Hero[]) => {
    console.log("데이터 fetching 이 성공한 이후에 실행되는 Perform", data);
  };

  const onError = (error: Error) => {
    console.log("데이터 fetching이 실패한 이후에 실행되는 Perform", error);
  };

  const {
    isLoading,
    data: heroData,
    error,
    isFetching,
  } = useSuperHeroesData(onSuccess, onError);
  console.log(heroData);
  const { mutate: addHero } = useAddSuperHeroesData();

  const handleAddHeroClick = () => {
    const hero = { name, alterEgo };
    console.log(hero);
    addHero(hero);
  };

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error : {error.message}</h2>;
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      {heroData?.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
}

// staleTime :
// 더 길게 지정하면 staleTime쿼리가 데이터를 자주 다시 가져오지 않습니다.
// 기본값 : 0초 이유 : 0초가 안전해서

// cacheTime :
// 기본적으로 "비활성" 쿼리는 5분 후에 가비지 수집 됩니다.
// 이를 변경하려면 cacheTime쿼리 의 기본값 을 1000 60 5밀리초가 아닌 다른 값 으로 변경할 수 있습니다 .

//refetchOnMount : mount 될때마다 매번 fetch (true,false."always")

//refetchInterval : 실시간 데이터 fetch나 주식같이 초단위로 fetch 해야하는 경우 사용
//refetchIntervalBackground : 백그라운드에서도 초단위로 refetch
//enabled : false면 fetch하지 않음 but, refetch 함수가 실행되면 fetch됨
//onSuccess : 성공할시 실행할 함수, onError: 실패할시 실행할 함수
//select : 데이터를 받고나서 가공한다음에 뿌려주는 역할
