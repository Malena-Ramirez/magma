import React from 'react'
import { HeaderContent, ButtonHead, ButtonSignUp, ContentButtons, LogoImg, ContentLogo } from './HeaderStyled.js'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    
    <HeaderContent>
      <ContentLogo>
        <LogoImg 
        src="https://i.imgur.com/qGLdQ5r.png" 
        alt="Logo Magma"/>
      </ContentLogo>
      <ContentButtons>
          <ButtonHead>
            <Link to="/login" style={{textDecoration:'none', color: '#23396C'}}>
            Iniciar sesión
            </Link> 
          </ButtonHead>
        <ButtonSignUp >
          Registrarse
        </ButtonSignUp>
      </ContentButtons>
    </HeaderContent>
  )
}

export default Header
