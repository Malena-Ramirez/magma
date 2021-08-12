import React from 'react'
import { Form, FloatingLabel, Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { profileAction } from '../../../action/profileAction';
import { TitlePages } from '../../Jobs/JobsStyled';
import { ImgTop } from '../ProfileStyled';

const FormProfile = () => {

    const dispatch = useDispatch()

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
                            name='profession'
                            // value={profession} 
                            // onChange={handleInputChange}
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
                            name='aboutMe'
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
                            name='education'
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
                            name='certificates'
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
                            name='skills' 
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
                            name='interest' 
                        />
                    </FloatingLabel>
                    <div className="d-grid gap-2">
                            <Button 
                                variant="warning" 
                                size="lg" 
                                className="mb-3"
                                value="submit"
                                onClick={()=> dispatch(profileAction())}
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
