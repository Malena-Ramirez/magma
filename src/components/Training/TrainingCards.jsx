import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardContainer } from './TrainingStyled';
import axios from 'axios';

const TrainingCards = ({ training, company }) => {
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
          <Card className='h-100'>
            <Link
              to={{
                pathname: `/detalle-capacitacion`,
                state: { training: training },
              }}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {categoryImages && (
                <Card.Img
                  variant='top'
                  src={category[training.randomIndexImage]}
                />
              )}
            </Link>

            <Card.Body className='h-100'>
              <Card.Title className='mb-3'>{training.title}</Card.Title>
              <Card.Text>
                {cuttedText} <span className='text-muted'>...</span>
              </Card.Text>
              <Card.Text>
                <Link
                  to={{
                    pathname: `/detalle-capacitacion`,
                    state: { training: training },
                  }}
                  style={{ color: 'inherit' }}
                >
                  <span>Ver más</span>
                </Link>
              </Card.Text>
            </Card.Body>

            <Card.Footer className='d-flex justify-content-between'>
              <small className='text-muted'>
                Última actualización: {training.updateDate}
              </small>
              {company && (
                <div>
                  <i className='bi bi-pencil-square'></i>
                  <i className='bi bi-x-square ms-1'></i>
                </div>
              )}
            </Card.Footer>
          </Card>
        </CardContainer>
      </Col>
    </>
  );
};

export default TrainingCards;
