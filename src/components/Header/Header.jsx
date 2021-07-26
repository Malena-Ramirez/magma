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
            <Link to="/Join" style={{textDecoration:'none', color: '#ffc107'}}>
            Ingresar
            </Link> 
          </ButtonHead>
      </ContentButtons>
    </HeaderContent>
  )
}

export default Header
