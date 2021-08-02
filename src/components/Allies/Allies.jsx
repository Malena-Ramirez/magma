import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { AlliesTitle, AllieName, AlliesSection } from './AlliesStyled';

const Allies = () => {
  const [allies, setAllies] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3004/allies`).then((result) => {
      const listAllies = result.data;
      setAllies(listAllies);
    });
  }, []);

  const isLoaded = allies.length > 0;
  return (
    <AlliesSection className='mt-5'>
      <AlliesTitle>Aliados</AlliesTitle>
      <Container>
        <Row className='col-sm-11 col-md-8 mx-auto'>
          {isLoaded ? (
            <Carousel className='carousel-light' nextLabel='' prevLabel=''>
              {allies.map((group, index) => (
                <Carousel.Item key={index} interval={10000}>
                  <Row xs={3} className='g-4'>
                    {group.map((allie) => (
                      <Col key={allie.name}>
                        <Card className='h-100 border-0'>
                          <Card.Img
                            variant='top'
                            rounded='true'
                            src={allie.image}
                          />
                          <Card.Title>
                            <AllieName>{allie.name}</AllieName>
                          </Card.Title>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <span>Cargando...</span>
          )}
        </Row>
      </Container>
    </AlliesSection>
  );
};

export default Allies;
