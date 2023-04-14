import { GridComponent } from "../../common/GridComponent";
import { useResources } from "../../Hooks/useResources";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { SpinnerLoader } from "../../common/SpinnerLoader";

export function GifLayaout({ searchKeyword }) {
  const [offSet, setOffSet] = useState(0);
  const [dataGifs, dataPagination, isLoading] = useResources(
    searchKeyword,
    undefined,
    offSet
  );

  return (
    <InfiniteScroll
      dataLength={dataGifs.length}
      hasMore={
        dataPagination && offSet + 25 > dataPagination.total_count
          ? false
          : true
      }
      next={() => setOffSet((prev) => prev + 25)}
      loader={<SpinnerLoader />}
    >
      <GridComponent
        data={dataGifs}
        detailRute="/gifs/details/"
        isLoading={isLoading}
      />
    </InfiniteScroll>
  );
}
