import React, { useMemo, useState } from 'react';
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
import {useDispatch, useSelector} from 'react-redux'
import {startLogout} from '../../action/action'
import { useEffect } from 'react';

const Header = () => {
  const { jobs } = useSelector((state) => state.jobs);
  const { trainingCard } = useSelector((state) => state.trainingCard);
  
  const dispatch = useDispatch();  

  const history = useHistory();
  const handleClick = () =>{
    history.push("/perfil");
  }

  const handleLogout = () =>{
    dispatch(startLogout())
  }

  // console.log(jobs, trainingCard);
  const [searchInfo, setSearchInfo] = useState('');
  const [training, setTraining] = useState([])
  const [jobsInfo, setJobsInfo] = useState([])

  useEffect(() => {
    setTraining(trainingCard)
    setJobsInfo(jobs)
  }, [training, jobsInfo])

  const jobsFilter = useMemo(() => jobsInfo.filter((item) => {
    return item.jobName.toLowerCase().includes(searchInfo.toLowerCase());
  }), [jobsInfo, searchInfo]);

  const trainingFilter = useMemo(() => training.filter((item) => {
    return item.title.toLowerCase().includes(searchInfo.toLowerCase());
  }), [training, searchInfo]);

  // console.log(jobsFilter, trainingFilter);

  const seachInfo = (evento) => {
    setSearchInfo(evento.target.value)
  }
  // console.log(searchInfo);

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
              onChange={seachInfo}
            />            
          </Form>
          <Nav>
            <Dropdown drop='start' as={NavItem}>
              <Dropdown.Toggle className='text-warning' as={NavLink}>
                <i className='bi bi-person-circle text-warning fs-4'></i>
              </Dropdown.Toggle>
              <Dropdown.Menu className='bg-warning'>
                <Dropdown.Item>Mensajes</Dropdown.Item>
                <Dropdown.Item onClick={handleClick}>Editar perfil</Dropdown.Item>
                <Dropdown.Item
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
