import React from 'react'
import { ContainerNamePhoto, 
    UserName, 
    UserInfo, 
    UserBasicInfo, 
    AboutMeText, 
    AboutMe, 
    TitleAboutMe,
    PublicityBusiness,
    MoreInfo,
    Sponsor, 
    ProfileEdit} from "./ProfileStyled";
import { Image, Container } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const Profile = () => {

    const history = useHistory();
    const handleClick = () =>{
        history.push("/editar-perfil");
    }

    return (
        <>
            <Container className="mt-3">
                <UserBasicInfo>
                    <ContainerNamePhoto>
                        <Image 
                            style={{width:"100px", height: "100px"}}
                            roundedCircle={true}
                            className="d-flex align-middle justify-content-center" 
                            src='https://www.wrkbemanning.no/wp-content/uploads/2017/04/profile-pic-dummy.jpg' 
                            alt="foto de perfil"
                        />                                   
                    </ContainerNamePhoto>
                    <UserInfo>
                        <UserName>Pepito Martinez</UserName>
                        <p>Profesión</p>    
                        <p>País / Ciudad</p>
                    </UserInfo> 
                    <ProfileEdit
                        onClick={handleClick}
                    >
                        <p>Editar Perfil</p>
                    </ProfileEdit>
                </UserBasicInfo>                
                <MoreInfo>
                    <div>
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
                    </div>  
                    <PublicityBusiness>
                        <Sponsor>
                            <h5>Pueba nuestras capacitaciones!!!</h5>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.</p>
                        </Sponsor>
                        <Sponsor>
                            <h5>Mira los nuevos empleos que hay para tí!!!</h5>
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.</p>
                        </Sponsor>
                    </PublicityBusiness>              
                </MoreInfo>                                               
            </Container>            
        </>
    )
}

export default Profile;
