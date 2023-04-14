import styles from "./DetailsOfGif.module.css";
import placeHolder from "../../common/placeHolder.png";

export function DetailsOfGif({ dataGifDetails }) {
  return (
    <div>
      <h1 className={styles.detailTitle}>Gif Details</h1>
      <div className={styles.detailContainer}>
        <img
          className={`${styles.detailColums} ${styles.detailImg}`}
          src={dataGifDetails[0].images.original.url || placeHolder}
          alt={dataGifDetails[0].title}
        ></img>
        <div className={`${styles.detailColums} ${styles.detailText}`}>
          <p>
            <strong> Title</strong> : {dataGifDetails[0].title}
          </p>
          <p>
            <strong>Giphy Link</strong> :{" "}
            <a
              className={styles.anchor}
              href={dataGifDetails[0].url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {dataGifDetails[0].url}
            </a>
          </p>
          <p>
            <strong>Giphy ID</strong> : {dataGifDetails[0].id}
          </p>
          <p>
            <strong>Rating</strong> : {dataGifDetails[0].rating}
          </p>
        </div>
      </div>
    </div>
  );
}
