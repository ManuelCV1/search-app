import styled from "styled-components";
import placeHolder from "./placeHolder.png";
import { StyledLinkRoute } from "./StyledCommon";

const Card = styled.li`
  list-style: none;
  text-align: center;
  color: #d5d5d5;
  &:hover {
    ${(props) =>
      props.variant === "movie"
        ? `position:relative;
           transform:scale(1.05);
           transition: 0.3s;`
        : `color:#ffdc00;
           opacity:0.8;`}
  }
`;

const Img = styled.img`
  background-color: black;
  height: ${(props) => (props.variant === "movie" ? "345px" : "300px")};
  width: ${(props) => (props.variant === "movie" ? "240px" : "100%")};
  border-radius: ${(props) => (props.variant === "movie" ? "5px" : "none")};
  @media (max-width: 550px) {
    ${(props) =>
      props.variant === "gif" &&
      `height: 240px;
       width: 240px;`};
  }
`;

export function CardComponent({ img, detailRute, variant }) {
  return (
    <StyledLinkRoute to={detailRute + img.id}>
      <Card key={img.id} variant={variant}>
        <Img
          variant={variant}
          alt={img.title}
          src={
            detailRute === "/gifs/details/"
              ? img.images.downsized.url || placeHolder
              : img.poster_path === null || undefined
              ? placeHolder
              : `https://image.tmdb.org/t/p/w300${img.poster_path}`
          }
        ></Img>
        <p>{img.title}</p>
      </Card>
    </StyledLinkRoute>
  );
}
