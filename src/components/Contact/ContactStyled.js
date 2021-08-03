import styled from "styled-components"
import { color } from "../GlobalStyles/color";

export const ImgTop = styled.div`
    background-image: url('https://i.imgur.com/mHX3fm7.jpg');
    width: 100%;
    height: 30vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: brightness(40%); // Más oscura
    margin-bottom: 2em;
    display: flex;
    align-items: center;
  justify-content: center;
`;

export const ContactTitle = styled.h1`
  text-align: center;
  color: ${color.main};
  font-weight: 800;
`;

export const FormContainer = styled.div`
  width: 60%;
  margin: 30px auto;
  min-width: 280px;
  max-width: 800px;
  border: 1px solid ${color.secondary};
  border-radius: 20px;
  padding: 30px 25px;
`;
