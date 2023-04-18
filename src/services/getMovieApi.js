const API = "https://api.themoviedb.org/3";
const MovieToken = process.env.REACT_APP_Movie_Token;

export default function getMovies(searchUrl) {
  return fetch(`${API}${searchUrl}`, {
    headers: {
      Authorization: `Bearer ${MovieToken}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
