import { useState, useEffect } from "react";
import getGifs from "../services/getGifsApi";

export function useResources(searchKeyword, gifId, offSet) {
  const [dataGif, setDataGif] = useState([]);
  const [dataPagination, setDataPagination] = useState(null);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(searchKeyword, gifId, offSet).then((dataGifs) => {
      setDataGif((prevData) => prevData.concat(dataGifs[0]));
      setDataPagination(dataGifs[1]);
      setIsLoading(false)
    });
  }, [searchKeyword, gifId, offSet]);
  return [dataGif, dataPagination,isLoading];
}
