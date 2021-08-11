import React from 'react'
import { 
    ImgTop, 
    ContainerInfoJobs, 
    TitlePages,
    ContainerInputs,
    ContainerJobs } from "./JobsStyled";
import { Form, FloatingLabel, Accordion, Button } from 'react-bootstrap';
import JobCards from "./JobCards";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


const Jobs = () => {
    
    const {jobs} = useSelector(state => state.jobs);
    console.log(jobs);

    
    const history = useHistory();
  const handleClick = () =>{
    history.push("/formulario-empresas");
  }
    
    return (
        <>
            <ImgTop>           
            </ImgTop>
            <TitlePages>Empleos</TitlePages> 
            <ContainerInfoJobs>            
                <ContainerInputs>
                    <Form.Group controlId='formBasicSearch' className="mb-3">
                        <FloatingLabel controlId='floatingSearch' label='Buscar empleo'>
                            <Form.Control
                            type='search' 
                            placeholder='Buscar'
                            name='search'
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Accordion defaultActiveKey='0'>
                        <Accordion.Item eventKey='0' className="mb-3">
                        <Accordion.Header>Horario</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                            <Form.Check
                                type='checkbox'
                                id='category-1'
                                label='Diurno'
                            />
                            <Form.Check 
                                type='checkbox' 
                                id='category-2' 
                                label='Nocturno' />
                            <Form.Check
                                type='checkbox'
                                id='category-3'
                                label='Mixto'
                            />
                            <Form.Check
                                type='checkbox'
                                id='category-4'
                                label='Remoto'
                            />
                            
                            </Form>
                        </Accordion.Body>
                        </Accordion.Item>                
                        <Accordion.Item eventKey='0' className="mb-3">
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
                                label='Marketing' />
                            <Form.Check
                                type='checkbox'
                                id='category-7'
                                label='Diseño'
                            />
                            <Form.Check
                                type='checkbox'
                                id='category-8'
                                label='Textil'
                            />
                            <Form.Check
                                type='checkbox'
                                id='category-9'
                                label='AgroIndustria'
                            />
                            </Form>
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item
                            className="mb-3"
                            eventKey='0'>
                        <Accordion.Header>Ciudad</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                            <Form.Check
                                type='checkbox'
                                id='category-10'
                                label='Medellin'
                            />
                            <Form.Check 
                                type='checkbox' 
                                id='category-11' 
                                label='Bogotá' />
                            <Form.Check
                                type='checkbox'
                                id='category-12'
                                label='Cartagena'
                            />
                            <Form.Check
                                type='checkbox'
                                id='category-13'
                                label='Arauca'
                            />
                            <Form.Check
                                type='checkbox'
                                id='category-14'
                                label='Cali'
                            />
                            </Form>
                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Button
                        variant="warning"
                        className="btn btn-warning" 
                        onClick={handleClick}
                        >Ingresa un nuevo empleo aquí
                    </Button>
                </ContainerInputs>  
                <ContainerJobs>               
                    {
                        jobs.map(job =>(
                            <JobCards
                                key={job.id}
                                job={job}
                            />
                        ))
                    }      
                </ContainerJobs> 
            </ContainerInfoJobs>
           
        </>
    )
}

export default Jobs

    // arrayBusiness.map((element) => (
    //     <JobCards 
    //     key={element.id} 
    //     image={element.image} 
    //     name={element.name} />
    // )) 