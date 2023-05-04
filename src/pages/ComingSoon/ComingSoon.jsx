import { BsChatLeftText } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import styled from "styled-components";
import { FooterArrow } from "../../common/FooterArrow";
import { Rotate } from "../../common/StyledCommon";

const ComingSoonContainer = styled.div`
  margin: 25px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  @media (max-width: 550px) {
    gap: 0;
  }
`;

const IconChatText = styled(BsChatLeftText)`
  font-size: 400px;
  @media (max-width: 550px) {
    font-size: 200px;
  }
`;

const TextContainer = styled.div`
  position: relative;
  top: 2.5rem;
  text-align: center;
  max-width: 400px;
  @media (max-width: 550px) {
    margin: 0 1rem 2rem 1rem;
  }

  > p {
    font-size: 1.3rem;
    color: #d5d5d5;
    position: relative;
  }
  > p > strong {
    &:before {
      position: absolute;
      top: 6px;
      left: -15px;
      content: "";
      background-color: #fbc500;
      width: 1rem;
      height: 1rem;
      @media (max-width: 550px) {
        background-color: transparent;
      }
    }
  }
`;

const IconSetting = styled(IoSettingsSharp)`
  position: relative;
  top: 6px;
  animation: ${Rotate} 5s linear infinite;
`;

const ComingSoon = () => {
  return (
    <div>
      <ComingSoonContainer>
        <IconChatText />
        <TextContainer>
          <h1 size={500}>
            <IconSetting size={35} /> Coming Soon...
          </h1>
          <p>
            <strong>SearchApp</strong> is Working for you!. To provide you with
            the content you are looking for on the web{" "}
          </p>
        </TextContainer>
      </ComingSoonContainer>
      <FooterArrow layout="detail" />
    </div>
  );
};

export default ComingSoon;
