import React from 'react';
import {
  HeaderContent,
  ButtonHeader,
  ContentButtons,
  LogoImg,
  ContentLogo,
} from './HeaderStyled.js';
import { useHistory } from 'react-router';

const Header = () => {
  const history = useHistory();
  const handleClick = (path) => {
    history.push(path);
  };
  return (
    <HeaderContent>
      <ContentLogo>
        <LogoImg src='https://i.imgur.com/qGLdQ5r.png' alt='Logo Magma' />
      </ContentLogo>
      <ContentButtons>
        <ButtonHeader onClick={() => handleClick('ingresar')}>
          Ingresar
        </ButtonHeader>
      </ContentButtons>
    </HeaderContent>
  );
};

export default Header;
