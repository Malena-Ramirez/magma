import React from 'react';
import { TrainingHero, TrainingTitle } from './TrainingStyled';
import ListCreatedTraining from './CrudTraining/ListCreatedTraining';
import TrainingCommonContent from './TrainingCommonContent/TrainingCommonContent';

const Training = () => {
  return (
    <>
      <TrainingHero></TrainingHero>
      <TrainingTitle>Capacitaciones</TrainingTitle>
      <ListCreatedTraining />
      <TrainingCommonContent />
    </>
  );
};

export default Training;
