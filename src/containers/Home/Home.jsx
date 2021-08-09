import React from 'react';
import { ContainerTopHome, ContainerJobandLessons, ImageCard, TitleText, TextHome, ContainerAll } from "./HomeStyled";
import { useHistory } from "react-router-dom";


const Home = () => {

  const history = useHistory();
  const handleClick = () =>{
    history.push("/capacitaciones");
  }

  const handleClickJobs = () =>{
    history.push("/empleos");
  }

  return (
    <>
      <ContainerTopHome>
      </ContainerTopHome>
      <ContainerAll >
        <ContainerJobandLessons onClick={handleClickJobs}>
          <ImageCard src="https://i.imgur.com/ef8jGHF.jpg" alt="Buscar empleo"/>
          <span>
            <TitleText>Empleos</TitleText>
            <TextHome>Descubre nuestras ofertas de empleo</TextHome>
          </span>          
        </ContainerJobandLessons>
        <ContainerJobandLessons onClick={handleClick}>
          <ImageCard src="https://i.imgur.com/UF5sES4.jpg" alt="Buscar capacitación"/>
          <span>            
            <TitleText>Capacitaciones</TitleText>
            <TextHome>Nunca dejes de aprender akenkrnvr</TextHome>
          </span>        
        </ContainerJobandLessons>
      </ContainerAll>
    </>
  );
};

export default Home;
