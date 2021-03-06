import React, { useEffect, useState, useMemo } from 'react';
import { Accordion, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TrainingCards from '../TrainingCards';
import { AsideBar, MainContent, TrainingContent } from '../TrainingStyled';

const TrainingCommonContent = () => {
  const { trainingCard } = useSelector((state) => state.trainingCard);
  //funciones de busqueda
  const [data, setData] = useState([]);
  // const [search, setSearch] = useState('')

  useEffect(() => {
    setData(trainingCard);
  }, [trainingCard]);
  // const handleSearch = (evento) => {
  //   setSearch(evento.target.value);
  //   };
  // const dataFiltered= useMemo(() => data.filter((item) => {
  //   return item.title.toLowerCase().includes(search.toLowerCase());
  // }), [data, search]);

  //funciones de categoria
  const categories = [
    {
      id: 1,
      category: 'engineering',
      name: 'Ingeniería',
    },
    {
      id: 2,
      category: 'design',
      name: 'Diseño',
    },
    {
      id: 3,
      category: 'marketing',
      name: 'Marketing',
    },
    {
      id: 4,
      category: 'personal-skills',
      name: 'Habilidades',
    },
    {
      id: 5,
      category: 'job-preparation',
      name: 'Preparación laboral',
    },
    {
      id: 6,
      category: 'other',
      name: 'Otra',
    },
  ];
  const [checkbox, setCheckbox] = useState('');

  const handleChange = (e) => {
    setCheckbox(e.target.value);
  };

  const dataCategory = useMemo(
    () =>
      data.filter((item) =>
        item.category.toLowerCase().includes(checkbox.toLowerCase())
      ),
    [data, checkbox]
  );

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
            // onChange={handleSearch}
          />
        </FloatingLabel>
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Categorías</Accordion.Header>
            <Accordion.Body>
              <Form>
                {categories.map((cat) => (
                  <Form.Check
                    key={cat.id}
                    type='checkbox'
                    id={cat.id}
                    name='checkbox'
                    label={cat.name}
                    value={cat.category}
                    onChange={handleChange}
                  />
                ))}
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </AsideBar>
      <MainContent>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {data &&
            dataCategory.map((training, index) => (
              <TrainingCards key={index} training={training} company={false} />
            ))}
        </Row>
      </MainContent>
    </TrainingContent>
  );
};

export default TrainingCommonContent;
