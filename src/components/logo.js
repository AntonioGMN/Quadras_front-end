import styled from "styled-components";

export default function Logo() {
  return <LogoStyled>
    Quadras
  </LogoStyled>
}

const LogoStyled = styled.div`
	width: 100%;
	height: 100px;
  margin-bottom: 25px;

  font-family: 'Saira Stencil One', cursive;
  font-size: 60px;
  text-align: center;
`;