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
  margin-bottom: 25px;
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

export const CardContainer = styled.div`
  height: 100%;
  /* cursor: pointer; */
  text-decoration: none;
  &:hover{
    transition: all 0.2s ease-out;
    transform: translateY(-2px)
  }
`;

export const NoTrainingContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoTrainingImg = styled.img`
  width: 65%;
  min-width: 260px;
  max-width: 380px;
  @media(min-width: 920px){
    width: 55%;
  }
`;

export const CardIcon = styled.i`
  cursor: pointer;
`;