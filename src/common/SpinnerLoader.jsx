import { ImSpinner10 } from "react-icons/im";
import styled from "styled-components";
import { Rotate } from "./StyledCommon";

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

const IconSpinner = styled(ImSpinner10)`
  animation: ${Rotate} 1s linear infinite;
`;
export function SpinnerLoader() {
  return (
    <SpinnerContainer>
      <IconSpinner size={100} />
      <p>Loading...</p>
    </SpinnerContainer>
  );
}
