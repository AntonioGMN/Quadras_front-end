import styled from "styled-components";

const Form = styled.form`
	width: 430px;
  background-color: aliceblue;
  
  display: flex;
  flex-direction:column;
  padding: 12px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  gap: 14px;

  input{
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    padding: 5px;

    font-size:18px;
  }
`;

export default Form;