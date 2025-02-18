import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #333;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  color: #fff;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  background: gold;
  color: black;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    background: #ffcc00;
  }
`;
