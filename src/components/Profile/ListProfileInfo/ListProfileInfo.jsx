import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
  AboutMe,
  AboutMeText,
  ContainerNamePhoto,
  MoreInfo,
  ProfileEdit,
  TitleAboutMe,
  UserBasicInfo,
  UserInfo,
  UserName,
} from '../ProfileStyled';

const ListProfileInfo = ({ setShowEdit }) => {
  const defaultPhoto =
    'https://www.wrkbemanning.no/wp-content/uploads/2017/04/profile-pic-dummy.jpg';

  const { name, email, photo } = useSelector((state) => state.login);

  const { profile } = useSelector((state) => state.profile);

  const [profilePhoto, setProfilePhoto] = useState(defaultPhoto);

  useEffect(() => {
    if (photo) {
      setProfilePhoto(photo);
    }
  }, [photo]);

  const handleClick = () => {
    setShowEdit(true);
  };
  return (
    <>
      <UserBasicInfo>
        <ContainerNamePhoto>
          <Image
            style={{ width: '100px', height: '100px' }}
            roundedCircle={true}
            className='d-flex align-middle justify-content-center'
            src={profilePhoto}
            alt='foto de perfil'
          />
        </ContainerNamePhoto>
        <UserInfo>
          <UserName>{name}</UserName>
          {profile ? (
            <>
              <span>{profile.profession}</span>
              <span>{profile.city}</span>
            </>
          ) : (
            <>
              <span>Agregar profesión</span>
              <span>Agregar ciudad</span>
            </>
          )}
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
                <span>
                  {profile ? profile.phoneNumber : 'Agregar teléfono'}
                </span>
              </div>
              <div>
                <i className='bi bi-envelope-fill me-2'></i>
                <span>{email}</span>
              </div>
            </AboutMeText>
          </AboutMe>
          <AboutMe>
            <TitleAboutMe>Acerca de mí</TitleAboutMe>
            <AboutMeText>
              {profile ? profile.aboutMe : 'Agregar información sobre tí'}
            </AboutMeText>
          </AboutMe>
          <AboutMe>
            <TitleAboutMe>Educación</TitleAboutMe>
            <AboutMeText>
              {profile
                ? profile.education
                : 'Agregar información sobre tu educación'}
            </AboutMeText>
          </AboutMe>
        </div>
      </MoreInfo>
    </>
  );
};

export default ListProfileInfo;
