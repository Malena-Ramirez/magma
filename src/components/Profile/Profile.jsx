import React, { useState } from 'react';
import {
  ContainerNamePhoto,
  UserName,
  UserInfo,
  UserBasicInfo,
  AboutMeText,
  AboutMe,
  TitleAboutMe,
  MoreInfo,
  ProfileEdit,
  ProfileContainer,
} from './ProfileStyled';
import { Image } from 'react-bootstrap';
import FormProfile from './Form/FormProfile';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { companyUser } = useSelector((state) => state.companyUser);
  const [showEdit, setShowEdit] = useState(false);
  const handleClick = () => {
    setShowEdit(true);
  };

  const [showProfile, setShowProfile] = useState(false)

  return (
    <>
      <ProfileContainer>
        {showEdit ? (
          <FormProfile setShowEdit={setShowEdit} />
        ) : (
          <>
            <UserBasicInfo>
              <ContainerNamePhoto>
                <Image
                  style={{ width: '100px', height: '100px' }}
                  roundedCircle={true}
                  className='d-flex align-middle justify-content-center'
                  src='https://www.wrkbemanning.no/wp-content/uploads/2017/04/profile-pic-dummy.jpg'
                  alt='foto de perfil'
                />
              </ContainerNamePhoto>            
                <UserInfo>
                  <UserName>Juan Jose Campos</UserName>
                  <span>Contador público</span>
                  <span>Medellín, Colombia</span>
                </UserInfo>                             
              <ProfileEdit
                className='bi bi-pencil-square fs-5'
                onClick={handleClick}
              ></ProfileEdit>
            </UserBasicInfo>

            <MoreInfo>
              <div>
                <AboutMe>
                  <TitleAboutMe>Información de contacto</TitleAboutMe>
                  <AboutMeText>
                    <div>
                      <i className='bi bi-telephone-fill me-2'></i>
                      <span>1234567890</span>
                    </div>
                    <div>
                      <i className='bi bi-envelope-fill me-2'></i>
                      <span>correo@correo.com</span>
                    </div>
                  </AboutMeText>
                </AboutMe>
                <AboutMe>
                  <TitleAboutMe>Acerca de mí</TitleAboutMe>
                  <AboutMeText>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </AboutMeText>
                </AboutMe>
                <AboutMe>
                  <TitleAboutMe>Educación</TitleAboutMe>
                  <AboutMeText>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </AboutMeText>
                </AboutMe>
              </div>
            </MoreInfo>
          </>
        )}
      </ProfileContainer>
    </>
  );
};

export default Profile;
