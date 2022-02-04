import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { Color } from "type/type";

const fetchColors = async ({ pageParam = 1 }) => {
  const response = await axios.get(
    `http://localhost:4000/colors?_limit=4&_page=${pageParam}`
  );
  return response.data;
};

export const InfiniteQueriesPage = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    //
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<Color[], Error>(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
        //fetchColors 의 props인 pageParam를 결정하는 함수
      if (pages.length < 4) {
          //하드코딩 했지만 api에서 값을 받아야함
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error?.message}</h2>;
  }
  console.log(data);
  return (
    <>
      <div>
        {data?.pages.map((group, i) => {
          return (
            <div key={i}>
              {group.map((color) => (
                <h2 key={color.id}>
                  {color.id} {color.label}
                </h2>
              ))}
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
          Load more
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};
