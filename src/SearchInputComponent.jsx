import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import { useSearchParams } from "react-router-dom";

const SearchBarContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
`;

const SearchBarForm = styled.form`
  position: relative;
`;

const SearchBarInput = styled.input`
  border: none;
  border-radius: 10px;
  height: 25px;
  padding: 3px 30px 3px 10px;
  &:focus {
    outline: none;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }
`;

const SearchBarIcon = styled(ImSearch)`
  position: absolute;
  color: black;
  top: 0;
  right: 8px;
  height: 100%;
  border: none;
  background: none;
`;

export function SearchInputComponent() {
  const [query, setQuery] = useSearchParams();

  return (
    <SearchBarContainer>
      <SearchBarForm onSubmit={(ev) => ev.preventDefault()}>
        <SearchBarInput
          autoFocus
          type={"text"}
          value={query.get("search") || ""}
          placeholder="Title"
          aria-label="Search"
          onChange={(ev) => {
            setQuery({ search: ev.target.value });
          }}
        />
        <SearchBarIcon size={20} />
      </SearchBarForm>
    </SearchBarContainer>
  );
}
