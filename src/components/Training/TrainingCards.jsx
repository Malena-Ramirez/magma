import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardContainer } from './TrainingStyled';

const TrainingCards = ({ image }) => {
  return (
    <>
      <Col>
        <CardContainer>
          <Link
            to='/detalle-capacitacion'
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Card>
              <Card.Img variant='top' src={image} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </CardContainer>
      </Col>
    </>
  );
};

export default TrainingCards;
