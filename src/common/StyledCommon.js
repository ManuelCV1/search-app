import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const StyledLinkRoute = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const StyledLinkAnchor = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const BlinkingLight = keyframes`

  0%{
  opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

export const Jumping = keyframes`
0%{
  transform: scale(1);
}
  50%{
    transform: scale(2);
  }
  100%{
    transform: scale(1);
  }
`;

export const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const DetailTile = styled.h1`
  text-align: center;
  margin: 40px;
`;

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DetailImg = styled.img`
  background-color: #000;
  border-radius: 5px;
  max-width: 480px;
  height: auto;
  margin: 15px;
  @media (max-width: 550px) {
    ${(props) => props.variant === "gif" && `width:250px;height:250px;`};
  }
`;

export const DetailText = styled.div`
  font-size: 1.2rem;
  color: #d5d5d5;
  max-width: 480px;
  height: auto;
  margin: 1rem;
  @media (max-width: 550px) {
    margin: 1rem 2rem;
  }
`;

export const StrongText = styled.strong`
  color: #fff;
`;

export const DetailColums = styled.div`
  max-width: 480px;
  height: auto;
  margin: 15px;
`;

export const DetailAnchor = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #ffdc00;
  }
`;
