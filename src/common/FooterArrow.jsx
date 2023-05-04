import styled, { css } from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";
import { StyledLinkAnchor, StyledLinkRoute } from "./StyledCommon";

const FooterDiv = styled.footer`
  color: #fff;
  text-decoration: none;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -1.5rem;
  opacity: 0.8;
  font-size: 3rem;

  ${(props) =>
    props.layout === "detail" &&
    css`
      position: relative;
      margin: 0 0 1rem -1.75rem;
      width: 3.5rem;
      height: 3.5rem;
      transform: rotate(-90deg);
    `};

  &:hover {
    &:after {
      content: "";
      position: absolute;
      top: 12px;
      left: 8px;
      display: block;
      background-color: #fbc500c5;
      height: 2rem;
      width: 2rem;
      z-index: -1;
    }
    opacity: 1;
  }
`;

export const FooterArrow = ({ layout }) => {
  if (layout === "detail") {
    return (
      <FooterDiv layout={layout}>
        <StyledLinkRoute to={-1}>
          <FaArrowCircleUp />
        </StyledLinkRoute>
      </FooterDiv>
    );
  }

  return (
    <FooterDiv layout={layout}>
      <StyledLinkAnchor href="#title">
        <FaArrowCircleUp />
      </StyledLinkAnchor>
    </FooterDiv>
  );
};
