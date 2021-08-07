import React from 'react'
import { Form, FloatingLabel, Container, Button } from 'react-bootstrap';
import { ImgTop, TitlePages } from "../JobsStyled";

const BusinessJobs = () => {

    console.log()

    return (
        <>
            <ImgTop>
            </ImgTop>
            <TitlePages>Formulario de empleo</TitlePages>
                <Container className='mt-4'>
                    <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Nombre de la empresa"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text" 
                                placeholder="Nombre de la empresa" 
                                name='name-business'
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
                                required 
                                />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Tipo de jornada"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="number" 
                                placeholder="Tipo de jornada"
                                required 
                                />
                        </FloatingLabel>
                        <Button variant="primary" size="lg">
                            Enviar
                        </Button>
                    </Form>
                </Container>
        </>
    )
}

export default BusinessJobs
