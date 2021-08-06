import React from 'react';
import {
  TrainingDetailContainer,
  TrainingDetailTitle,
  DescriptionContainer,
} from './TrainingDetailStyled';

const TrainingDetail = () => {
  const youtube_parser = (url) => {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };
  const url = 'https://www.youtube.com/embed/5n4IwNslMiA';

  console.log(youtube_parser(url));

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
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </TrainingDetailContainer>
  );
};

export default TrainingDetail;
