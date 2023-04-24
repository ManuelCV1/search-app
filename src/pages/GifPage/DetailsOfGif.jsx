import {
  DetailTile,
  DetailContainer,
  DetailImg,
  DetailText,
  DetailAnchor,
  StrongText,
} from "../../common/StyledCommon";
import placeHolder from "../../common/placeHolder.png";

export function DetailsOfGif({ dataGifDetails }) {
  return (
    <div>
      <DetailTile>Gif Details</DetailTile>
      <DetailContainer>
        <DetailImg
          src={dataGifDetails[0].images.original.url || placeHolder}
          alt={dataGifDetails[0].title}
        />
        <DetailText>
          <p>
            <StrongText> Title</StrongText> : {dataGifDetails[0].title}
          </p>
          <p>
            <StrongText>Giphy Link</StrongText> :{" "}
            <DetailAnchor
              href={dataGifDetails[0].url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {dataGifDetails[0].url}
            </DetailAnchor>
          </p>
          <p>
            <StrongText>Giphy ID</StrongText> : {dataGifDetails[0].id}
          </p>
          <p>
            <StrongText>Rating</StrongText> : {dataGifDetails[0].rating}
          </p>
        </DetailText>
      </DetailContainer>
    </div>
  );
}
