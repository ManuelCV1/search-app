import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";
import { StyledLinkAnchor } from "./StyledCommon";

const FooterDiv = styled.footer`
  color: #fff;
  text-decoration: none;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -1.5rem;
  opacity: 0.8;
  font-size: 3rem;
  &:hover {
    opacity: 1;
  }
`;

export const FooterUpArrow = () => {
  return (
    <FooterDiv>
      <StyledLinkAnchor href="#title">
        <FaArrowCircleUp />
      </StyledLinkAnchor>
    </FooterDiv>
  );
};
