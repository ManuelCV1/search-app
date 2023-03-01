

export default function getGifs(searchKeyword = false , id = false , offset ) {

  const apiKey = "ClbXHsn6SS6Ue4YoJJiaNmf56qXX223X";
  const queryParams = `&limit=25&offset=${offset}&rating=pg-13`;

  let apiURL;

  if (searchKeyword===false && id===false) {
    apiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}${queryParams}`
  }
  else if (id===false) {
    apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchKeyword}${queryParams}`;
  } else {
    apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`;
  }

  return fetch(apiURL)
    .then((respon) => respon.json())
    .then((gifJson) => {
      const { data , pagination } = gifJson;
      return [data,pagination];
    });
}
