import styled from "styled-components";

const NoResultContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export function NoResults() {
  return (
    <NoResultContainer>
      <h1>No Results</h1>
    </NoResultContainer>
  );
}
