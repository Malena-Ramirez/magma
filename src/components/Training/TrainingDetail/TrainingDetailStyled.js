import styled from "styled-components";
import { color } from "../../GlobalStyles/color";

export const TrainingDetailContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TrainingDetailTitle = styled.h1`
  text-align: center;
  color: ${color.main};
  font-weight: 800;
  margin: 20px 0;
`;

export const DescriptionContainer = styled.p`
  text-align: justify;
  width: 850px;
  margin-bottom: 25px; 
`;