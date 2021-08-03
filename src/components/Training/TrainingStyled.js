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

export const TrainingContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;
  @media(min-width: 768px){
    grid-template-columns: 1fr 3fr;
    padding: 20px 30px;
    gap: 5px;
  }
  @media(min-width: 992px){
    gap: 25px;
    padding: 20px 50px;
  }
`;

export const AsideBar = styled.aside`
padding-top: 10px;
  @media(min-width: 992px){
    padding: 10px;
  }
`;

export const MainContent = styled.main`
  padding: 10px;
`;