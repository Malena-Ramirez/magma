import React, { useEffect, useState,useMemo } from 'react';
import { Accordion, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TrainingCards from '../TrainingCards';
import { AsideBar, MainContent, TrainingContent } from '../TrainingStyled';

function searchingTerm(term){
    return term.training.toLowerCase().includes(term);
}

const TrainingCommonContent = () => {
  const [search, setSearch] = useState('')
  const { trainingCard } = useSelector((state) => state.trainingCard);
  const [data, setData] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    setData(trainingCard)
  }, [trainingCard]);
  const handleSearch =  (evento) => {
    setSearch(evento.target.value);
    };
  const dataFiltered= useMemo(() => data.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  }), [data, search]);
  return (
    <TrainingContent>
      <AsideBar>        
          <FloatingLabel
            controlId='floatingInput'
            label='Buscar capacitaciones'
            className='mb-3'                          
          >
            <Form.Control 
              type='text' 
              placeholder='Buscar capacitaciones'
              name='term'
              onChange={handleSearch}
            />
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
                <Form.Check type='checkbox' id='category-3' label='Marketing' />
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
        <Row xs={1} md={2} lg={3} className='g-4'>
          {
          data &&
          dataFiltered.map((training,index) => <TrainingCards key={index} training={training} company={false} />)
          }
        </Row>
      </MainContent>
    </TrainingContent>
  );
};

export default TrainingCommonContent;

//si me oye ?
//si pero me llegaba echo