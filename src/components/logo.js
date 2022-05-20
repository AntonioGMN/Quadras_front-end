import styled from "styled-components";

export default function Logo() {
  return <LogoStyled>
    Quadras
  </LogoStyled>
}

const LogoStyled = styled.div`
	width: 300px;
	height: 100px;

  font-family: 'Saira Stencil One', cursive;
  font-size: 60px;
  text-align: center;
`;