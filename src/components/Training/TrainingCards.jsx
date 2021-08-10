import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardContainer } from './TrainingStyled';
import axios from 'axios';

const TrainingCards = ({ training }) => {
  const [categoryImages, setCategoryImages] = useState(undefined);

  useEffect(() => {
    axios.get(`http://localhost:3004/categories`).then((result) => {
      const imagesList = result.data;
      setCategoryImages(imagesList);
    });
  }, []);

  const category = categoryImages ? categoryImages[training.category] : [];
  const cuttedText = training.description.split(' ').slice(0, 20).join(' ');
  return (
    <>
      <Col>
        <CardContainer>
          <Link
            to={{
              pathname: `/detalle-capacitacion`,
              state: { training: training },
            }}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Card className='h-100'>
              {categoryImages && (
                <Card.Img
                  variant='top'
                  src={category[training.randomIndexImage]}
                />
              )}

              <Card.Body>
                <Card.Title className='mb-3'>{training.title}</Card.Title>
                <Card.Text>
                  {cuttedText} <span className='text-muted'>...</span>
                </Card.Text>
                <Card.Text>
                  <span style={{ textDecoration: 'underline' }}>Ver más</span>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className='text-muted'>
                  Última actualización: {training.updateDate}
                </small>
              </Card.Footer>
            </Card>
          </Link>
        </CardContainer>
      </Col>
    </>
  );
};

export default TrainingCards;
