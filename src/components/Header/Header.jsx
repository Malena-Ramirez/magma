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
import { useHistory } from "react-router-dom";

const Header = () => {

  const history = useHistory();
  const handleClick = () =>{
    history.push("/perfil");
  }

  return (
    <Navbar
      sticky='top'
      variant='dark'
      expand='md'
      id='costum-navbar-container'
    >
      <Container fluid>
        <Navbar.Brand href='/'>
          <img
            id='navbar-logo'
            src='https://i.imgur.com/8saUX2R.png'
            className='d-inline-block align-top'
            alt='Logo de Magma'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto' id='items-navbar'>
            <Nav.Link href='/'>Inicio</Nav.Link>
            <Nav.Link href='/empleos'>Empleos</Nav.Link>
            <Nav.Link href='/capacitaciones'>Capacitaciones</Nav.Link>
            <Nav.Link href='/contacto'>Contáctanos</Nav.Link>
          </Nav>
          <Form className='d-flex me-3'>
            <FormControl
              type='search'
              placeholder='Buscar'
              className='mr-2'
              aria-label='Search'
            />
            <Button variant='outline-warning'>Buscar</Button>
          </Form>
          <Nav>
            <Dropdown drop='start' as={NavItem}>
              <Dropdown.Toggle className='text-warning' as={NavLink}>
                <i className='bi bi-person-circle text-warning fs-4'></i>
              </Dropdown.Toggle>
              <Dropdown.Menu className='bg-warning'>
                <Dropdown.Item>Mensajes</Dropdown.Item>
                <Dropdown.Item onClick={handleClick}>Editar perfil</Dropdown.Item>
                <Dropdown.Item>Cerrar sesión</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
