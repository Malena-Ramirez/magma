import React from 'react';
import {
  ImgLanding,
  LandingTitle,
  LandingText,
  LandingTextContainer,
} from './InfoLandingPageStyled';

const InfoLandingPage = () => {
  return (
    <>
      <ImgLanding
        src='https://i.imgur.com/6qJgmkd.jpg'
        className='float-right img-landin center'
        alt='Imagen del landing page'
      />
      <LandingTitle>Magma</LandingTitle>
      <LandingTextContainer>
        <LandingText>
          Somos una empresa comprometida con el desarrollo económico y social de
          Colombia. Por eso apostamos a que las empresas contraten estudiantes
          en su perido de prácticas y egresados de estudios técnicos,
          tecnológicos y de estudios superiores sin experiencia profesional, con
          ganas de demostrar todas sus capacidades y habilidades.
        </LandingText>
      </LandingTextContainer>
    </>
  );
};
export default InfoLandingPage;
