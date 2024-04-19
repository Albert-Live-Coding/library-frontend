import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import logo from "./image.png";

const HEADER = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 8px 0px lightgray;
`;
const NAV = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const INPUT = styled.input`
  background-color: #f4f4ff;
  border: none;
  width: 60%;
  height: 20px;
  font-size: 10px;
  padding: 2px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;
const DIV = styled.div`
  position: absolute;
  right: 30px;
  display: flex;
  justify-content: space-between;
  width: 90px;
`;
const ICONDIV = styled.div`
  width: 20px;
  height: 20px;
  background-color: #f4f4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  &:hover {
    background-color: #6751da;
    cursor: pointer;
  }
`;
const IMG = styled.img`
  width: 30px;
  position: absolute;
  left: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <HEADER>
      <NAV>
        <IMG src={logo} />
        <INPUT type="text" placeholder="Search" />
        <DIV>
          <ICONDIV>
            <FontAwesomeIcon icon={faUser} />
          </ICONDIV>
          <ICONDIV>
            <FontAwesomeIcon icon={faHeart} />
          </ICONDIV>
          <ICONDIV>
            <FontAwesomeIcon icon={faCartShopping} />
          </ICONDIV>
        </DIV>
      </NAV>
    </HEADER>
  );
};

export default Header;
