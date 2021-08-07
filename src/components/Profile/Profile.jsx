import React from 'react'
import { ContainerNamePhoto, UserName, UserInfo, UserBasicInfo, AboutMeText, AboutMe, TitleAboutMe } from "./ProfileStyled";
import { Image, Container } from 'react-bootstrap'

const Profile = () => {
    return (
        <>
            <Container className="mt-3">
                <UserBasicInfo>
                    <ContainerNamePhoto>
                        <Image 
                            style={{width:"100px"}}
                            roundedCircle={true}
                            className="d-flex align-middle justify-content-center" 
                            src='https://www.wrkbemanning.no/wp-content/uploads/2017/04/profile-pic-dummy.jpg' 
                            alt="foto de perfil"
                        />                                   
                    </ContainerNamePhoto>
                    <UserInfo>
                        <UserName>Pepito Martinez</UserName>
                        <p>Profeción</p>    
                        <p>Pais / Ciudad</p>
                    </UserInfo> 
                </UserBasicInfo> 
                <AboutMe>
                    <TitleAboutMe>Acerca de mí</TitleAboutMe>
                    <AboutMeText>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </AboutMeText>
                </AboutMe>          
                <AboutMe>
                    <TitleAboutMe>Educación</TitleAboutMe>
                    <AboutMeText>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </AboutMeText>
                </AboutMe>   
                <AboutMe>
                    <TitleAboutMe>Certificados</TitleAboutMe>
                    <AboutMeText>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </AboutMeText>
                </AboutMe>        
                <AboutMe>
                    <TitleAboutMe>Aptitudes</TitleAboutMe>
                    <AboutMeText>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </AboutMeText>
                </AboutMe>          
                <AboutMe>
                    <TitleAboutMe>Intereses</TitleAboutMe>
                    <AboutMeText>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </AboutMeText>
                </AboutMe>                    
            </Container>            
        </>
    )
}

export default Profile
