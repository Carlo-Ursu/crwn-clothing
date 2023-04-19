import styled from 'styled-components'
import {BaseButton} from "../../components/button/button.styles";

export const Login = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  background-color: rgba(171, 166, 166, 0.2);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  min-width: 200px;
  gap: 30px;

  ${BaseButton} {
    border-radius: 15px;
  }
`;

export const FormGroup = styled.div`
  background-color: rgba(171, 166, 166, 0.2);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  min-width: 200px;
`;

export const Label = styled.label`
  text-align: center;
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  width: 100%;
`;


export const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const Error = styled.div`
  text-align: center;
  color: #d21414;
  margin-top: 10px;
`;