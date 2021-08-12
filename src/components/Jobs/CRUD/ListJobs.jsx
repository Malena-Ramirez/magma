import React, { useEffect, useRef } from 'react'
import { Button, Container, FloatingLabel, Form, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useForm } from '../../../hook/useForm';
import { OptionCrud } from '../JobsStyled';

const ListJobs = () => {

    const {active:jobs} = useSelector(state => state.jobs);
    // console.log('job activo', jobs)

    const [values, handleInputChange] = useForm(jobs)
    const {idBusiness, jobName, description, requirements, type, city, salary, workDay} = values;

    // const activeId = useRef(jobs.id)

    // useEffect(() => {
    //     if(jobs.id !== activeId.current){
    //         reset(jobs)
    //     }
    // }, [jobs, reset])

    return (
        <>
            <Container className='my-3'>
                <div className='mt-4'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Puesto</th>
                            <th>Descripcion</th>
                            <th>Requisitos</th>
                            <th>Modalidad</th>
                            <th>Ciudad</th>
                            <th>Salario</th>
                            <th>Tipo de jornada</th>
                            <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{idBusiness}</td>
                            <td>{jobName}</td>
                            <td>{description}</td>
                            <td>{requirements}</td>
                            <td>{type}</td>
                            <td>{city}</td>
                            <td>{salary}</td>
                            <td>{workDay}</td>
                            <td>
                                <OptionCrud>                                
                                <i className="bi bi-pencil mx-2"></i>
                                </OptionCrud>
                                <OptionCrud>                                
                                <i className="bi bi-trash mx-2"></i>
                                </OptionCrud>
                            </td>
                            </tr>                    
                        </tbody>
                    </Table>
                </div>        
                <div>
                    <Form>                        
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nombre del puesto"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text" 
                                placeholder="Nombre del puesto" 
                                name='jobName'
                                value={jobName}
                                onChange={handleInputChange}
                                required
                                />                                
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Descripcion del puesto"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text" 
                                placeholder="Descripcion del puesto" 
                                name='description'
                                value={description}
                                onChange={handleInputChange}
                                required
                                />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Requisitos para el puesto"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text" 
                                placeholder="Requisitos para el puesto" 
                                name='requirements'
                                value={requirements}
                                onChange={handleInputChange}
                                required
                                />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Modalidad"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text" 
                                placeholder="Modalidad"
                                name='type'
                                value={type}
                                onChange={handleInputChange}
                                required 
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Ciudad"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text" 
                                placeholder="Ciudad" 
                                name='city'
                                value={city}
                                onChange={handleInputChange}
                                required
                                />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Salario"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="number" 
                                placeholder="Salario"
                                name='salary'
                                value={salary}
                                onChange={handleInputChange}
                                required 
                                />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Tipo de jornada"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text" 
                                placeholder="Tipo de jornada"
                                name='workDay'
                                value={workDay}
                                onChange={handleInputChange}
                                required 
                                />
                        </FloatingLabel>
                        <Form.Group 
                            controlId="formFile" 
                            className="mb-3">
                            <Form.Label>
                                Ingresa la imagen de tu empresa
                            </Form.Label>
                            <Form.Control 
                                type="file" 
                            />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button 
                                variant="warning" 
                                size="lg" 
                                className="mb-3"
                                value="submit"                               
                                >
                                Enviar
                            </Button>            
                        </div>
                    </Form>
                </div>                       
            </Container>            
        </>
    )
}

export default ListJobs
