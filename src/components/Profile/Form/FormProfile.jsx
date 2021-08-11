import React from 'react'
import { Form, FloatingLabel, Container, Button } from 'react-bootstrap';
import { TitlePages } from '../../Jobs/JobsStyled';
import { ImgTop } from '../ProfileStyled';

const FormProfile = () => {
    return (
        <>
            
            <ImgTop></ImgTop>
            <Container className="my-3">
                <TitlePages>Edita tu perfil</TitlePages>
            <Form className="my-3">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Profesión"
                        className="mb-3"
                    >
                        <Form.Control 
                            type="text" 
                            placeholder="Profesión" 
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
                        />
                    </FloatingLabel>
                    <FloatingLabel 
                        controlId="floatingInput" 
                        label="Acerca de mí"
                        className="mb-3"
                    >
                        <Form.Control 
                            type="text" 
                            placeholder="Acerca de mí" 
                        />
                    </FloatingLabel>
                    <FloatingLabel 
                        controlId="floatingInput" 
                        label="Educación"
                        className="mb-3"
                    >
                        <Form.Control 
                            type="text" 
                            placeholder="Educación" 
                        />
                    </FloatingLabel>
                    <FloatingLabel 
                        controlId="floatingInput" 
                        label="Certificados"
                        className="mb-3"
                    >
                        <Form.Control 
                            type="text" 
                            placeholder="Certificados" 
                        />
                    </FloatingLabel>
                    <FloatingLabel 
                        controlId="floatingInput" 
                        label="Aptitudes"
                        className="mb-3"
                    >
                        <Form.Control 
                            type="text" 
                            placeholder="Aptitudes" 
                        />
                    </FloatingLabel>
                    <FloatingLabel 
                        controlId="floatingInput" 
                        label="Intereses"
                        className="mb-3"
                    >
                        <Form.Control 
                            type="text" 
                            placeholder="Intereses" 
                        />
                    </FloatingLabel>
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
            </Container>                
        </>
    )
}

export default FormProfile
