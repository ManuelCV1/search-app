import { CardComponent } from "./CardComponent";
import styled from "styled-components";
import { NoResults } from "./NoResults";

const Grid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 30px;
  padding: 25px;
  justify-content: center;
  @media (max-width: 550px) {
    grid-template-columns: 100%;
  }
`;

export function GridComponent({ data = [], detailRute, isLoading, variant }) {
  if (isLoading === false && data.length === 0) {
    return <NoResults />;
  }

  return (
    <div>
      <Grid variant={variant}>
        {data.map((img) => (
          <CardComponent
            img={img}
            detailRute={detailRute}
            key={img.id}
            variant={variant}
          />
        ))}
      </Grid>
    </div>
  );
}
