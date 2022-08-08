import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FC } from "react";

const NavbarContainer = styled.nav({
  width: "100%",
  height: "80px",
  backgroundColor: "black",
  display: "flex",
  flexDirection: "row",
  position: "fixed",
  bottom: 0,
  justifyContent: "space-around",
  alignItems: "center",
  zIndex: 1,
  boxSizing: "border-box",
  "@media (min-width: 700px)": {
    left: 0,
    flexDirection: "column",
    width: "100px",
    height: "94vh",
    justifyContent: "flex-start",
    paddingTop: "30px",
  },
});

const NavLink = styled(Link)({
  color: "wheat",
  textDecoration: "none",
  margin: "10px",
  fontWeight: 500,
  fontSize: "1rem",
  display: "flex",
  "@media (min-width: 700px)": {
    flexDirection: "column",
    alignItems: "space-around",
  },
});

const NavText = styled.span({
  marginLeft: "10px",
  fontSize: ".8rem",
  "@media (min-width: 700px)": {
    margin: "10px 0px",
  },
});

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavLink to="/">
        <FontAwesomeIcon icon={faHouse} />
        <NavText>Home</NavText>
      </NavLink>
      <NavLink to="/collection">
        <FontAwesomeIcon icon={faBoxArchive} />
        <NavText>Collection</NavText>
      </NavLink>
    </NavbarContainer>
  );
};

export default Navbar;
