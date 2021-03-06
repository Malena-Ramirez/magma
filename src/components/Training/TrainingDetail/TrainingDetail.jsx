import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  TrainingDetailContainer,
  TrainingDetailTitle,
  DescriptionContainer,
  AuthorContainer,
  AuthorImg,
  Description,
  AuthorInfo,
} from './TrainingDetailStyled';

const TrainingDetail = (props) => {
  const { training } = props.location.state;

  const youtube_parser = (url) => {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };

  const [allies, setAllies] = useState([]);
  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3004/allies`).then((result) => {
      const { data } = result;
      let arr = [];
      for (const row of data) for (const e of row) arr.push(e);
      setAllies(arr);
    });
  }, []);

  useEffect(() => {
    const matchCompany = allies.find((allie) => allie.name === training.author);
    setCompanyInfo(matchCompany);
  }, [allies, training]);

  return (
    <TrainingDetailContainer>
      <TrainingDetailTitle>{training.title}</TrainingDetailTitle>

      <DescriptionContainer>
        <AuthorContainer>
          {allies.length > 0 && companyInfo && (
            <AuthorImg src={companyInfo.image} alt='Imagen de la empresa' />
          )}

          <AuthorInfo>
            <span>Publicado por: {training.author}</span>
            <span>Última fecha de modificación: {training.updateDate}</span>
          </AuthorInfo>
        </AuthorContainer>
        <Description>{training.description}</Description>
      </DescriptionContainer>
      <iframe
        style={{ marginBottom: '40px' }}
        width='760'
        height='515'
        src={`https://www.youtube.com/embed/${youtube_parser(
          training.urlVideo
        )}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </TrainingDetailContainer>
  );
};

export default TrainingDetail;
