import styles from "../GifPage/DetailsOfGif.module.css";
import placeHolcer from "../../common/placeHolder.png";

export function DetailsOfMovie({ data = {} }) {
  return (
    <div>
      <h1 className={styles.detailTitle}>Movie Details</h1>
      <div className={styles.detailContainer}>
        <img
          className={`${styles.detailColums} ${styles.detailImg}`}
          src={
            data.poster_path === null
              ? placeHolcer
              : `https://image.tmdb.org/t/p/w300${data.poster_path}`
          }
          alt={data.title}
        ></img>
        <div className={`${styles.detailColums} ${styles.detailText}`}>
          <p>
            <strong> Title</strong> : {data.title}
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
            <strong>Genres</strong> :{" "}
            {data.genres === undefined || null
              ? "Not specified"
              : data.genres.map((a) => a.name).join(", ")}
          </p>
          <p>
            <strong>Rating</strong> :{" "}
            {data.vote_average === undefined || null
              ? "Not specified"
              : data.vote_average.toFixed(2) + " (TMDB)"}
          </p>
          <p>
            <strong>Release Date</strong> :{" "}
            {data.release_date ?? "Not specified"}
          </p>
          <p>
            <strong> Description</strong> : {data.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
