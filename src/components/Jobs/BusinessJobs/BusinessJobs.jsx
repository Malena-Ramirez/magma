import React from 'react'
import { Form, FloatingLabel, Container, Button } from 'react-bootstrap';
import { ImgTop, TitlePages } from "../JobsStyled";
import { useForm } from '../../../hook/useForm';
import { jobsAction } from "../../../action/jobsAction";
import { useDispatch } from 'react-redux'

const BusinessJobs = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        description: '',
        requirements: '',
        type: '',
        city: '',
        salary: '',
        workDay: '',
    });

    const { name, description, requirements, type, city, salary, workDay } = formValues;

    const handleLogIn = (e) => {
        e.preventDefault();
        console.log(name, description, requirements, type, city, salary, workDay);
        // dispatch(login(email, password));
        reset();
      };
    
    

    return (
        <>
            <ImgTop>
            </ImgTop>
            <TitlePages>Formulario de empleo</TitlePages>
                <Container className='mt-4'>
                    <Form onSubmit={handleLogIn}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nombre de la empresa"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text" 
                                placeholder="Nombre de la empresa" 
                                name='name'
                                value={name}
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
                        <div className="d-grid gap-2">
                            <Button 
                                variant="warning" 
                                size="lg" 
                                className="mb-3"
                                value="submit"
                                onClick={()=> dispatch(jobsAction())}
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
