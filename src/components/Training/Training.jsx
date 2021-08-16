import React from 'react';
import { TrainingHero, TrainingTitle } from './TrainingStyled';
import ListCreatedTraining from './CrudTraining/ListCreatedTraining';
import TrainingCommonContent from './TrainingCommonContent/TrainingCommonContent';
import { useSelector } from 'react-redux';

const Training = () => {
  const { companyUser } = useSelector((state) => state.companyUser);

  return (
    <>
      <TrainingHero></TrainingHero>
      <TrainingTitle>Capacitaciones</TrainingTitle>
      {companyUser && <ListCreatedTraining />}
      <TrainingCommonContent />
    </>
  );
};

export default Training;
