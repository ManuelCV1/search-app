import placeHolcer from "../../common/placeHolder.png";
import {
  DetailContainer,
  DetailImg,
  DetailText,
  DetailTile,
  StrongText,
} from "../../common/StyledCommon";

export function DetailsOfMovie({ data = {} }) {
  return (
    <div>
      <DetailTile>Movie Details</DetailTile>
      <DetailContainer>
        <DetailImg
          width={300}
          height={450}
          src={
            data.poster_path === null
              ? placeHolcer
              : `https://image.tmdb.org/t/p/w300${data.poster_path}`
          }
          alt={data.title}
        ></DetailImg>
        <DetailText>
          <p>
            <StrongText> Title</StrongText> : {data.title}
          </p>
          {/*<p>
            <strong>Giphy Link</strong> :{" "}
            <a
              className={styles.anchor}
              href={dataGifDetails[0].url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {dataGifDetails[0].url}
            </a>
          </p>*/}
          <p>
            <StrongText>Genres</StrongText> :{" "}
            {data.genres === undefined || null
              ? "Not specified"
              : data.genres.map((a) => a.name).join(", ")}
          </p>
          <p>
            <StrongText>Rating</StrongText> :{" "}
            {data.vote_average === undefined || null
              ? "Not specified"
              : data.vote_average.toFixed(2) + " (TMDB)"}
          </p>
          <p>
            <StrongText>Release Date</StrongText> :{" "}
            {data.release_date ?? "Not specified"}
          </p>
          <p>
            <StrongText> Description</StrongText> : {data.overview}
          </p>
        </DetailText>
      </DetailContainer>
    </div>
  );
}
