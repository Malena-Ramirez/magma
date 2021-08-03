import styled from "styled-components";
import { color } from "../GlobalStyles/color";

export const TrainingHero = styled.div`
  background-image: url('https://i.imgur.com/VS1cm4k.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 30vh;
  filter: brightness(40%); 
  margin-bottom: 2em;
`;

export const TrainingTitle = styled.h1`
  text-align: center;
  color: ${color.main};
  font-weight: 800;
`;