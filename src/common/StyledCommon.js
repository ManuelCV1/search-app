import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLinkRoute = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const StyledLinkAnchor = styled.a`
  text-decoration: none;
  color: #fff;
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
`;

export const DetailText = styled.p`
  font-size: 1.2rem;
  color: #d5d5d5;
  max-width: 480px;
  height: auto;
  margin: 15px;
`;

export const StrongText = styled.strong`
  color: #fff;
`;

export const DetailColums = styled.div`
  max-width: 480px;
  height: auto;
  margin: 15px;
`;

export const DetailAnchor = styled.div`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #ffdc00;
  }
`;
