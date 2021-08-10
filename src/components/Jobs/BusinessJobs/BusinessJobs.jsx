import React from 'react'
import { Form, FloatingLabel, Container, Button } from 'react-bootstrap';
import { ImgTop, TitlePages } from "../JobsStyled";
import { useForm } from '../../../hook/useForm';
import { jobsAction } from "../../../action/jobsAction";
import { useDispatch } from 'react-redux'

const BusinessJobs = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        jobName: '',
        description: '',
        requirements: '',
        type: '',
        city: '',
        salary: '',
        workDay: '', 
    });

    const { jobName, description, requirements, type, city, salary, workDay } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( jobName, description, requirements, type, city, salary, workDay);
        // dispatch(login(email, password));
        dispatch(jobsAction(jobName, description, requirements, type, city, salary, workDay));
        reset();
      };
    
    

    return (
        <>
            <ImgTop>
            </ImgTop>
            <TitlePages>Formulario de empleo</TitlePages>
                <Container className='mt-4'>
                    <Form onSubmit={handleSubmit}>                        
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
                            label="¿Cómo seria el trabajo? Remoto o presencial"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text" 
                                placeholder="¿Cómo seria el trabajo? Remoto o presencial"
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
                                onClick={() => {dispatch(jobsAction
                                    (   jobName, 
                                        description, 
                                        requirements, 
                                        type, 
                                        city, 
                                        salary, 
                                        workDay))}}
                                >
                                Enviar
                            </Button>            
                        </div>
                    </Form>
                </Container>
        </>
    )
}

export default BusinessJobs
