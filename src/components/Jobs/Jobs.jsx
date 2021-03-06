import React, { useEffect, useMemo, useState } from 'react';
import {
  ImgTop,
  ContainerInfoJobs,
  TitlePages,
  ContainerInputs,
  ContainerJobs,
} from './JobsStyled';
import { Form, FloatingLabel, Accordion, Button } from 'react-bootstrap';
import JobCards from './JobCards';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Jobs = () => {
  const { jobs } = useSelector((state) => state.jobs);
  const { companyUser } = useSelector((state) => state.companyUser);

  const [jobsData, setJobsData] = useState([]); 
    useEffect(() => {
    setJobsData(jobs)
  }, [jobs])  

  const [searchJobs, setSearchJobs] = useState('');
  const handleSearch = (event) => {
    setSearchJobs(event.target.value)
  }

  const jobsFilter = useMemo(() => jobsData.filter((item) =>{
    return item.jobName.toLowerCase().includes(searchJobs.toLowerCase())
  }), [jobsData, searchJobs]);

  const history = useHistory();
  const handleClick = () => {
    history.push('/vacantes-creadas');
  };

  return (
    <>
      <ImgTop></ImgTop>
      <TitlePages>Empleos</TitlePages>
      <ContainerInfoJobs>
        <ContainerInputs>
          {companyUser && (
            <Button
              variant='warning'
              className='btn btn-warning mb-3 p-3 w-100'
              onClick={handleClick}
            >
              Mis vacantes
            </Button>
          )}

          <Form.Group 
            controlId='formBasicSearch' 
            className='mb-3'>
            <FloatingLabel 
              controlId='floatingSearch' 
              label='Buscar empleo'>
              <Form.Control 
                type='search' 
                placeholder='Buscar' 
                name='search'
                onChange={handleSearch}
              />
            </FloatingLabel>
          </Form.Group>
          <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='0' className='mb-3'>
              <Accordion.Header>Sector</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Check
                    type='checkbox'
                    id='category-5'
                    label='Ingenieria'
                  />
                  <Form.Check
                    type='checkbox'
                    id='category-6'
                    label='Marketing'
                  />
                  <Form.Check type='checkbox' id='category-7' label='Dise??o' />
                  <Form.Check type='checkbox' id='category-8' label='Textil' />
                  <Form.Check
                    type='checkbox'
                    id='category-9'
                    label='AgroIndustria'
                  />
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='mb-3' eventKey='0'>
              <Accordion.Header>Ciudad</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Check
                    type='checkbox'
                    id='category-10'
                    label='Medellin'
                  />
                  <Form.Check type='checkbox' id='category-11' label='Bogot??' />
                  <Form.Check
                    type='checkbox'
                    id='category-12'
                    label='Cartagena'
                  />
                  <Form.Check type='checkbox' id='category-13' label='Arauca' />
                  <Form.Check type='checkbox' id='category-14' label='Cali' />
                  <Form.Check type='checkbox' id='category-15' label='Remoto' />
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ContainerInputs>
        <ContainerJobs>          
          {jobs &&
            jobsFilter.map((job) => (
              <JobCards key={job.id} job={job} />
          ))}
        </ContainerJobs>
      </ContainerInfoJobs>
    </>
  );
};

export default Jobs;
