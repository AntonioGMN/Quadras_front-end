import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <LogoStyled>Quadras</LogoStyled>
    </Link>
  );
}

const LogoStyled = styled.div`
  width: 300px;
  height: 100px;

  font-family: "Saira Stencil One", cursive;
  font-size: 60px;
  text-align: center;
`;
