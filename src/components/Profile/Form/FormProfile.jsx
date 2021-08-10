import React from 'react'
import { Form, FloatingLabel, Container, Button } from 'react-bootstrap';

const FormProfile = () => {
    return (
        <>
            <Form>
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
            </Form>
        </>
    )
}

export default FormProfile
