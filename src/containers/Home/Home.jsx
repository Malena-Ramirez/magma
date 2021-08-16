import React from 'react';
import {
  ContainerTopHome,
  ContainerJobandLessons,
  ImageCard,
  TitleText,
  TextHome,
  ContainerAll,
} from './HomeStyled';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { TitlePages } from '../../components/Jobs/JobsStyled';

const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/capacitaciones');
  };

  const handleClickJobs = () => {
    history.push('/empleos');
  };

  return (
    <>
      <ContainerTopHome></ContainerTopHome>
      <TitlePages>Bienvenidos</TitlePages>
      <Container className='my-3'>
        <TitleText>
          Somos una organización comprometida con el desarrollo económico y
          social de Colombia, por eso apostamos por los jóvenes que están
          egresandos de sus carreras técnicas o profesionales, y que posean poca
          experiencia laboral. Por ello buscamos conectarlos con aquellas
          empresas en búsqueda de nuevos talentos, ademas de darles las
          herramientas necesarias para ser el prospecto ideal.
        </TitleText>
      </Container>
      <ContainerAll>
        <ContainerJobandLessons onClick={handleClickJobs}>
          <ImageCard
            src='https://i.imgur.com/ef8jGHF.jpg'
            alt='Buscar empleo'
          />
          <div>
            <TitleText>Empleos</TitleText>
            <TextHome>Descubre nuestras ofertas de empleo </TextHome>
          </div>
        </ContainerJobandLessons>
        <ContainerJobandLessons onClick={handleClick}>
          <ImageCard
            src='https://i.imgur.com/UF5sES4.jpg'
            alt='Buscar capacitación'
          />
          <div>
            <TitleText>Capacitaciones</TitleText>
            <TextHome>Nunca dejes de aprender </TextHome>
          </div>
        </ContainerJobandLessons>
      </ContainerAll>
    </>
  );
};

export default Home;
