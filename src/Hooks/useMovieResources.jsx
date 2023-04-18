import { useState, useEffect } from "react";
import getMovies from "../services/getMovieApi";

export function useMovieResources(path, searchKeyword = "", page) {
  const [dataResults, setDataResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    const searchUrl =
      searchKeyword === ""
        ? path === "/discover/movie"
          ? `${path}?page=${page}&include_adult=false`
          : path
        : `/search/movie?query=${searchKeyword}&page=${page}&include_adult=false`;
    getMovies(searchUrl).then((data) => {
      if (path === "/discover/movie") {
        setDataResults((prevData) => prevData.concat(data.results));
        data.page < data.total_pages ? setHasMore(true) : setHasMore(false);
      } else {
        setDataResults(data);
      }
      setIsLoading(false);
    });
  }, [path, searchKeyword, page]);

  return [dataResults, isLoading, hasMore];
}
