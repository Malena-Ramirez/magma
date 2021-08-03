import React from 'react';
import {
  FooterContent,
  LogoImg,
  IconsContainer,
  RRSS,
  ContentLogo,
  AboutUs,
} from './FooterStyled';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3004/icons`).then((result) => {
      const listIcons = result.data;
      setIcons(listIcons);
    });
  }, []);
  const isLoaded = icons.length > 0;
  return (
    <FooterContent>
      <ContentLogo>
        <LogoImg src='https://i.imgur.com/mqZOdpV.png' alt='Logo Magma' />
      </ContentLogo>
      {isLoaded && (
        <IconsContainer>
          {icons.map((icon) => (
            <RRSS key={icon.name} className={icon.class}></RRSS>
          ))}
        </IconsContainer>
      )}
      <AboutUs>
        <Link to='/nosotros' style={{ color: '#EBEBEB' }}>
          Sobre nosotros
        </Link>{' '}
      </AboutUs>
    </FooterContent>
  );
};

export default Footer;
