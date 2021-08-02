import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  NavItem,
  NavLink,
} from 'react-bootstrap';
import './header.css';

const Header = () => {
  return (
    <Navbar
      sticky='top'
      variant='dark'
      expand='lg'
      id='costum-navbar-container'
    >
      <Container>
        <Navbar.Brand href='/'>
          <img
            src='https://i.imgur.com/8saUX2R.png'
            width='90'
            className='d-inline-block align-top'
            alt='Logo de Magma'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <Nav.Link href='/'>Inicio</Nav.Link>
            <Nav.Link href='/empleos'>Empleos</Nav.Link>
            <Nav.Link href='/capacitaciones'>Capacitaciones</Nav.Link>
            <Nav.Link href='/contacto'>Contáctanos</Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Buscar'
              className='mr-2'
              aria-label='Search'
            />
            <Button variant='outline-warning'>Search</Button>
            <Nav>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  <i className='bi bi-person-circle'></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Hello there!</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
