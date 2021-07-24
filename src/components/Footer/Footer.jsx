import React from 'react';
import {
  FooterContent,
  LogoImg,
  IconsContainer,
  RRSS,
  ContentLogo,
} from './FooterStyled';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
        <LogoImg src='https://i.imgur.com/mGynpSv.png' alt='Logo Magma' />
      </ContentLogo>
      {isLoaded && (
        <IconsContainer>
          {icons.map((icon) => (
            <RRSS key={icon.name} className={icon.class}></RRSS>
          ))}
        </IconsContainer>
      )}
    </FooterContent>
  );
};

export default Footer;
