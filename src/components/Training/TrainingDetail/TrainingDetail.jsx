import React from 'react';
import {
  TrainingDetailContainer,
  TrainingDetailTitle,
  DescriptionContainer,
} from './TrainingDetailStyled';

const TrainingDetail = () => {
  return (
    <TrainingDetailContainer>
      <TrainingDetailTitle>Título de la capacitación</TrainingDetailTitle>
      <DescriptionContainer>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui numquam
        placeat, voluptas, animi odio aut labore deleniti incidunt laborum vel,
        eius ullam quae quos. Atque nostrum maxime illum hic corrupti?. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Qui numquam placeat,
        voluptas, animi odio aut labore deleniti incidunt laborum vel, eius
        ullam quae quos. Atque nostrum maxime illum hic corrupti?.
      </DescriptionContainer>
      <iframe
        style={{ marginBottom: '40px' }}
        width='760'
        height='515'
        src='https://www.youtube.com/embed/5n4IwNslMiA'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </TrainingDetailContainer>
  );
};

export default TrainingDetail;
