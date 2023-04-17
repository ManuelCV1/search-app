import { useState, useEffect } from "react";

const API = "https://api.themoviedb.org/3";
const MovieToken = process.env.REACT_APP_Movie_Token;

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
        Authorization: `Bearer ${MovieToken}`,
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
