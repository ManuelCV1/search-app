import { useState, useEffect } from "react";

const API = "https://api.themoviedb.org/3";

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
    fetch(`${API}${searchUrl}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGE2YTU4MDM3ZGU0OGZiYzE2YjUyZmUyNDJjZTI1NiIsInN1YiI6IjY0MmUwZjM4MGQyZjUzMDA5NzM3NzY1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5CFAaFn2mP5sxBhEPC-Tv-3F8aTnqTmTfD1yhXefsYs",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
      .then((data) => {
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
