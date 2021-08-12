import React from 'react';
import { ContainerTopHome, ContainerJobandLessons, ImageCard, TitleText, TextHome, ContainerAll } from "./HomeStyled";
import { useHistory } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { TitlePages } from '../../components/Jobs/JobsStyled';


const Home = () => {

  const history = useHistory();
  const handleClick = () => {
    history.push("/capacitaciones");
  }

  const handleClickJobs = () => {
    history.push("/empleos");
  }

  return (
    <>
      <ContainerTopHome>
      </ContainerTopHome>
      <TitlePages>
        Bienvenidos
      </TitlePages>
      <Container className='my-3'>
        <TitleText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque quis felis quis gravida. Sed ultricies nibh sed elit interdum, sit amet lacinia enim tincidunt. Donec et eleifend sapien. In convallis, nunc non elementum tincidunt, felis mauris tincidunt sapien, non ullamcorper tortor orci at lacus. Ut tincidunt facilisis felis in luctus. Nam aliquam, orci quis tincidunt mattis, elit tellus tincidunt est, vitae efficitur orci nibh sed odio. Cras finibus ante id ligula auctor vehicula.
        </TitleText>
      </Container>
      <ContainerAll >
        <ContainerJobandLessons onClick={handleClickJobs}>
          <ImageCard src="https://i.imgur.com/ef8jGHF.jpg" alt="Buscar empleo" />
          <span>
            <TitleText>Empleos</TitleText>
            <TextHome>Descubre nuestras ofertas de empleo</TextHome>
          </span>
        </ContainerJobandLessons>
        <ContainerJobandLessons onClick={handleClick}>
          <ImageCard src="https://i.imgur.com/UF5sES4.jpg" alt="Buscar capacitación" />
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
