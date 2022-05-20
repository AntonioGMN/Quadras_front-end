import styled from "styled-components";

export const boxStyle = {
	display: "flex",
	alignItems: "center",
	fontSize: "20px",
	gap: "8px",
};

export const HearderStyle = styled.header`
	width: 100%;
	height: 80px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	div {
		text-align: start;
	}
`;

export const LoginButton = styled.button`
	width: 80px;
	height: 30px;
	border: 2px solid #1e6793e3;
	border-radius: 50px;
	background-color: #1e6793e3;
	color: #fff;
	font-size: 18px;
`;

export const SelectSyle = styled.section`
	display: flex;
	align-items: center;
`;
