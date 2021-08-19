import { Button, Image, Modal } from 'react-bootstrap';
import React from 'react';
import {
  AboutMe,
  AboutMeText,
  ContainerNamePhoto,
  MoreInfo,
  TitleAboutMe,
  UserBasicInfo,
  UserInfo,
  UserName,
} from '../../Profile/ProfileStyled';

const CandidateDetail = (props) => {
  const { selectedCandidate, ...rest } = props;
  return (
    <Modal
      {...rest}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedCandidate && (
          <>
            <UserBasicInfo>
              <ContainerNamePhoto>
                <Image
                  style={{ width: '100px', height: '100px' }}
                  roundedCircle={true}
                  className='d-flex align-middle justify-content-center'
                  src={selectedCandidate.photo}
                  alt='foto del candidato'
                />
              </ContainerNamePhoto>
              <UserInfo>
                <UserName>{selectedCandidate.name}</UserName>
                <span>{selectedCandidate.profession}</span>
                <span>{selectedCandidate.city}</span>
              </UserInfo>
            </UserBasicInfo>

            <MoreInfo>
              <div>
                <AboutMe>
                  <TitleAboutMe>Información de contacto</TitleAboutMe>
                  <AboutMeText>
                    <div>
                      <i className='bi bi-telephone-fill me-2'></i>
                      <span>{selectedCandidate.phoneNumber}</span>
                    </div>
                    <div>
                      <i className='bi bi-envelope-fill me-2'></i>
                      <span>{selectedCandidate.email}</span>
                    </div>
                  </AboutMeText>
                </AboutMe>
                <AboutMe>
                  <TitleAboutMe>Acerca del candidato</TitleAboutMe>
                  <AboutMeText>{selectedCandidate.aboutMe}</AboutMeText>
                </AboutMe>
                <AboutMe>
                  <TitleAboutMe>Educación</TitleAboutMe>
                  <AboutMeText>{selectedCandidate.education}</AboutMeText>
                </AboutMe>
              </div>
            </MoreInfo>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CandidateDetail;
