import InfiniteScroll from "react-infinite-scroll-component";
import { useMovieResources } from "../../Hooks/useMovieResources";
import { GridComponent } from "../../common/GridComponent";
import { SpinnerLoader } from "../../common/SpinnerLoader";
import { useState } from "react";

const path = "/discover/movie";

export function MovieLayaout({ searchKeyword }) {
  const [page, setPage] = useState(1);
  const [data, isLoading, hasMore] = useMovieResources(
    path,
    searchKeyword,
    page
  );

  return (
    <InfiniteScroll
      dataLength={data.length}
      hasMore={hasMore}
      loader={<SpinnerLoader />}
      next={() => setPage((prev) => prev + 1)}
    >
      <div>
        <GridComponent
          data={data}
          detailRute="/movies/details/"
          isLoading={isLoading}
        />
      </div>
    </InfiniteScroll>
  );
}
