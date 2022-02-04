import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Color } from "type/type";

const fetchColors = async (pageNumber: number) => {
  const response = await axios.get(
    `http://localhost:4000/colors?_limit=2&_page=${pageNumber}`
  );
  return response.data;
};

export const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data, isFetching } = useQuery<
    Color[],
    Error
  >(["colors", pageNumber], () => fetchColors(pageNumber), {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error?.message}</h2>;
  }

  return (
    <>
      <div>
        {data?.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id}. {color.label}
              </h2>
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev Page
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 6}
        >
          Next Page
        </button>
      </div>
      {isFetching && "Loading"}
    </>
  );
};
