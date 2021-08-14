import React from 'react';
import {
  BusinessDescription,
  BusinessName,
  ContainerText,
  LogoBusiness,
} from '../Jobs/JobsStyled';
import { ContainerAspirant } from './AspirantStyled';
import MyVerticallyCenteredModal from './ModalAspirant';

const AspirantCard = ({ name, img }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <ContainerAspirant onClick={() => setModalShow(true)}>
        <LogoBusiness src={img} alt={name} />
        <ContainerText>
          <BusinessName>{name}</BusinessName>
          <BusinessDescription>Descripcion del aspirante</BusinessDescription>
        </ContainerText>
      </ContainerAspirant>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default AspirantCard;
