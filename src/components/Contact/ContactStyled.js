import styled from "styled-components";
import { color } from "../GlobalStyles/color";

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