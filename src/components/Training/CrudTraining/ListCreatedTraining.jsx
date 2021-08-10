import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TrainingCards from '../TrainingCards';
import {
  AsideBar,
  MainContent,
  NoTrainingContainer,
  NoTrainingImg,
  TrainingContent,
} from '../TrainingStyled';
import AddTraining from './AddTraining';

const ListCreatedTraining = () => {
  const { trainingCard } = useSelector((state) => state.trainingCard);
  const { id } = useSelector((state) => state.login);
  const createdTraings = trainingCard.filter(
    (element) => element.idAuthor === id
  );

  return (
    <>
      <TrainingContent>
        <AsideBar>
          <AddTraining />
        </AsideBar>
        <MainContent>
          <h2 className='text-center mb-3'>Capacitaciones creadas</h2>
          <Row xs={1} md={2} lg={3} className='g-4'>
            {createdTraings.length > 0 ? (
              createdTraings.map((training, index) => (
                <TrainingCards
                  key={index}
                  training={training}
                  company={TextTrackCue}
                />
              ))
            ) : (
              <NoTrainingContainer>
                <NoTrainingImg
                  src='https://i.imgur.com/tPAEDid.png'
                  alt='Crear capacitaciones'
                />
                <span className='text-muted'>
                  No ha agregado capacitaciones
                </span>
              </NoTrainingContainer>
            )}
          </Row>
        </MainContent>
      </TrainingContent>
      <h2 className='text-center mb-3'>Todas las capacitaciones</h2>
    </>
  );
};

export default ListCreatedTraining;
