import { Link } from "react-router-dom";
import styled from "styled-components";
import { SearchInputComponent } from "./SearchInputComponent";

const MainTitle = styled.h1`
  box-sizing: border-box;
  width: 250px;
  border: solid #fbc500;
  border-radius: 50px;
  margin: 2rem auto;
  text-align: center;
  font-size: 2.5rem;
  background-color: #0a182b;
  color: #fbc500;
  padding: 0 0 10px 0;
`;

const ContainerLink = styled.div`
  background-color: #0a182b;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  gap: 5px;
  margin-bottom: 0;
`;

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  margin: 3px;
  font-family: Arial, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-weight: 300;
  font-size: 1.4rem;
  color: #fff;
  padding-bottom: 5px;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    background-color: #fbc500;
    width: 40px;
    height: 5px;
    top: 1.6rem;
    left: 2px;
    transform: translateX(-120%);
    transition: transform 0.25s;
  }
  &:hover::before {
    transform: translateX(0);
  }
  @media (max-width: 335px) {
    > span {
      position: absolute;
      visibility: hidden;
    }
  }
`;

const Separator = styled.span`
  position: relative;
  bottom: 5.5px;
  color: #d5d5d5;
  padding-left: 10px;
  &:hover {
    transform: none;
  }
`;

const MainDescriptionContainer = styled.div`
  color: #d5d5d5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  background-color: #0a182b;
  > p {
    //position: relative;
    //bottom: 5px;
    text-align: center;
    margin: 0 1rem 1rem 1rem;
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
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
        <StyledLink to="/soon">
          <span>Coming </span>Soon...
        </StyledLink>
      </ContainerLink>
      <MainDescriptionContainer>
        <p>
          <strong>SearchApp</strong> allows you to search🔍 your favorite
          content on the web with one click. You can get lists of{" "}
          <strong>movies</strong>🎬, <strong>series</strong>🎥,{" "}
          <strong>gifs</strong>😉, among others...
        </p>
      </MainDescriptionContainer>
      <SearchInputComponent />
    </header>
  );
}
