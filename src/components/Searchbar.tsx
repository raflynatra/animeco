import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

const SearchbarContainer = styled.div({
  width: "100%",
  height: "60px",
  backgroundColor: "wheat",
  position: "fixed",
  top: 0,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  zIndex: 2,
});

const SearchForm = styled.form({
  display: "flex",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  borderRadius: "15px",
  height: "1rem",
  padding: ".5rem",
  alignItems: "center",
});

const SearchInput = styled.input({
  backgroundColor: "transparent",
  border: "none",
  marginLeft: "5px",
  ":active, :focus": {
    outline: "none",
  },
});

const Logo = styled(Link)({
  fontFamily: "Playball, cursive",
  fontSize: "2rem",
  textDecoration: "none",
  color: "black",
  fontWeight: 600,
});

const Searchbar: FC = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <SearchbarContainer>
      <Logo to="/">AnimeCo</Logo>
      <SearchForm>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <SearchInput
          placeholder="Search an anime..."
          onChange={handleChange}
        ></SearchInput>
      </SearchForm>
    </SearchbarContainer>
  );
};

export default Searchbar;
