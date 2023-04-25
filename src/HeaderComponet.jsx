import { Link } from "react-router-dom";
import styled from "styled-components";
import { SearchInputComponent } from "./SearchInputComponent";

const MainTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  //color: #39cccc;
  color: #fbc500;
  padding-bottom: 10px;
  //text-shadow: 0px 4px 3px rgba(7, 62, 165, 0.664),
  //  0px 8px 13px rgba(7, 62, 165, 0.664), 0px 18px 23px rgba(7, 62, 165, 0.664);
`;

const ContainerLink = styled.div`
  background-color: #0a182b;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  gap: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 3px;
  font-family: Arial, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-weight: 300;
  font-size: 1.4rem;
  color: #fff;
  &:hover {
    color: #fbc500;
    transform: rotate(-6deg);
    transition: 0.15s;
  }
`;

const Separator = styled.span`
  position: relative;
  bottom: 1.5px;
  color: #d5d5d5;
  padding-left: 5px;
  &:hover {
    transform: none;
  }
`;

export function HeaderComponent() {
  return (
    <header>
      <MainTitle id="title">Search App</MainTitle>
      <ContainerLink>
        <StyledLink to="/movies">Movies</StyledLink>
        <Separator>|</Separator>
        <StyledLink to="/gifs">Gifs</StyledLink>
        <Separator>|</Separator>
        <StyledLink to="/soon">Coming soon...</StyledLink>
      </ContainerLink>
      <br />
      <br />
      <SearchInputComponent />
    </header>
  );
}
