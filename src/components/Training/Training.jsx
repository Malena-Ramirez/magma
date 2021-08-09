import React from 'react';
import {
  TrainingHero,
  TrainingTitle,
  TrainingContent,
  AsideBar,
  MainContent,
} from './TrainingStyled';
import { FloatingLabel, Form, Accordion, Row } from 'react-bootstrap';
import TrainingCards from './TrainingCards';
import AddTraining from './AddTraining/AddTraining';

const Training = () => {
  const imagesArray = [
    'https://i.imgur.com/biar6zr.png',
    'https://i.imgur.com/f1yF0tA.png',
    'https://i.imgur.com/KsYZmgn.png',
    'https://i.imgur.com/3KOk2ck.png',
    'https://i.imgur.com/nkehguR.png',
    'https://i.imgur.com/Uh2iBnP.png',
    'https://i.imgur.com/Uyoo7Rp.png',
  ];
  return (
    <>
      <TrainingHero></TrainingHero>
      <TrainingTitle>Capacitaciones</TrainingTitle>
      <TrainingContent>
        <AsideBar>
          <AddTraining />
          <FloatingLabel
            controlId='floatingInput'
            label='Buscar capacitaciones'
            className='mb-3'
          >
            <Form.Control type='text' placeholder='Buscar capacitaciones' />
          </FloatingLabel>
          <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Categorías</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Check
                    type='checkbox'
                    id='category-1'
                    label='Ingeniería'
                  />
                  <Form.Check type='checkbox' id='category-2' label='Diseño' />
                  <Form.Check
                    type='checkbox'
                    id='category-3'
                    label='Marketing'
                  />
                  <Form.Check
                    type='checkbox'
                    id='category-4'
                    label='Habilidades'
                  />
                  <Form.Check
                    type='checkbox'
                    id='category-5'
                    label='Preparación laboral'
                  />
                  <Form.Check type='checkbox' id='category-6' label='Otra' />
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </AsideBar>
        <MainContent>
          <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
            {imagesArray.map((image, index) => (
              <TrainingCards key={index} image={image} />
            ))}
          </Row>
        </MainContent>
      </TrainingContent>
    </>
  );
};

export default Training;
