import React from 'react'
import { 
    ImgTop, 
    ContainerInfoJobs, 
    ChooseTheJob, 
    LogoBusiness, 
    BusinessName, 
    BusinessDescription,
    ContainerText,
    TitlePages,
    ContainerInputs,
    ContainerJobs,
    ButtonJobs,
    ContentButton } from "./JobsStyled";
import { Form, FloatingLabel, Accordion } from 'react-bootstrap';

const Jobs = () => {
    return (
        <>
            <ImgTop>           
            </ImgTop>
            <TitlePages>Empleos</TitlePages> 
            <ContainerInfoJobs>
                <ContainerInputs>
                    <Form.Group controlId='formBasicSearch'>
                        <FloatingLabel controlId='floatingSearch' label='Buscar empleo'>
                            <Form.Control
                            type='search' 
                            placeholder='Buscar'
                            name='search'
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Accordion defaultActiveKey='0'>
                        <Accordion.Item eventKey='0'>
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
                    </Accordion>
                    <Accordion defaultActiveKey='0'>
                        <Accordion.Item eventKey='0'>
                        <Accordion.Header>Ciudad</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                            <Form.Check
                                type='checkbox'
                                id='category-1'
                                label='Medellin'
                            />
                            <Form.Check 
                                type='checkbox' 
                                id='category-2' 
                                label='Bogotá' />
                            <Form.Check
                                type='checkbox'
                                id='category-3'
                                label='Cartagena'
                            />
                            <Form.Check
                                type='checkbox'
                                id='category-4'
                                label='Arauca'
                            />
                            <Form.Check
                                type='checkbox'
                                id='category-5'
                                label='Cali'
                            />
                            </Form>
                        </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </ContainerInputs>
                <ContainerJobs>
                    <ChooseTheJob>
                        <LogoBusiness src="https://i.imgur.com/NQDgHj8.png" alt="Enercontrol"/>
                        <ContainerText>                        
                        <BusinessName>Enercontrol</BusinessName>
                        <BusinessDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere eu sapien vitae viverra. Phasellus justo mauris, pharetra a venenatis vitae, ultricies vulputate tellus. Suspendisse potenti. In egestas tortor eget dui commodo vehicula. Nulla facilisi. Nullam sollicitudin leo nec urna sagittis volutpat. Duis hendrerit libero non ex semper, a sagittis sapien malesuada.</BusinessDescription>
                        </ContainerText>
                        <ContentButton>
                            <ButtonJobs>
                                Postular directamente
                            </ButtonJobs>
                            <ButtonJobs>
                                ver más
                            </ButtonJobs>                  
                        </ContentButton>
                    </ChooseTheJob>
                    <ChooseTheJob>
                        <LogoBusiness src="https://i.imgur.com/SY2GsO0.png" alt="LogoIndustries"/>
                        <ContainerText>                        
                        <BusinessName>Logo Industries</BusinessName>
                        <BusinessDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere eu sapien vitae viverra. Phasellus justo mauris, pharetra a venenatis vitae, ultricies vulputate tellus. Suspendisse potenti. In egestas tortor eget dui commodo vehicula. Nulla facilisi. Nullam sollicitudin leo nec urna sagittis volutpat. Duis hendrerit libero non ex semper, a sagittis sapien malesuada.</BusinessDescription>
                        </ContainerText>
                        <ContentButton>
                            <ButtonJobs>
                                Postular directamente
                            </ButtonJobs>
                            <ButtonJobs>
                                ver más
                            </ButtonJobs>                  
                        </ContentButton>
                    </ChooseTheJob>
                    <ChooseTheJob>
                        <LogoBusiness src="https://i.imgur.com/zL3I65j.jpg" alt="Textiles"/>
                        <ContainerText>                        
                        <BusinessName>Aritex</BusinessName>
                        <BusinessDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere eu sapien vitae viverra. Phasellus justo mauris, pharetra a venenatis vitae, ultricies vulputate tellus. Suspendisse potenti. In egestas tortor eget dui commodo vehicula. Nulla facilisi. Nullam sollicitudin leo nec urna sagittis volutpat. Duis hendrerit libero non ex semper, a sagittis sapien malesuada.</BusinessDescription>
                        </ContainerText>
                        <ContentButton>
                            <ButtonJobs>
                                Postular directamente
                            </ButtonJobs>
                            <ButtonJobs>
                                ver más
                            </ButtonJobs>                  
                        </ContentButton>
                    </ChooseTheJob>
                </ContainerJobs>
            </ContainerInfoJobs>
        </>
    )
}

export default Jobs
