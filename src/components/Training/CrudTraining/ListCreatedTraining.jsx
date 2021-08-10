import React from 'react';
// import TrainingCards from '../TrainingCards'
import { AsideBar, MainContent, TrainingContent } from '../TrainingStyled';
import AddTraining from './AddTraining';

const ListCreatedTraining = () => {
  return (
    <TrainingContent>
      <AsideBar>
        <AddTraining />
      </AsideBar>
      <MainContent>
        <h2>Capacitaciones creadas</h2>
      </MainContent>
    </TrainingContent>
  );
};

export default ListCreatedTraining;
