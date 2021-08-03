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
    ContainerJobs } from "./JobsStyled";
import { Form, FloatingLabel } from 'react-bootstrap';

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
                    <FloatingLabel controlId="floatingSelect" label="Horario">
                        <Form.Select aria-label="Floating label select example">
                            <option value=''>Elige un horario</option>                            
                            <option value="diurno">Diurno</option>
                            <option value="nocturno">Nocturno</option>
                            <option value="remoto">Remoto</option>
                            <option value="mixto">Mixto</option>
                        </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingSelect" label="Ciudad">
                        <Form.Select aria-label="Floating label select example">
                            <option value=''>Elige una ciudad</option>
                            <option value="Bogotá">Bogotá</option>
                            <option value="Cartagena">Cartagena</option>
                            <option value="Medellin">Medellin</option>
                        </Form.Select>
                    </FloatingLabel>
                </ContainerInputs>
                <ContainerJobs>
                    <ChooseTheJob>
                        <LogoBusiness src="https://i.imgur.com/NQDgHj8.png" alt="Enercontrol"/>
                        <ContainerText>                        
                        <BusinessName>Enercontrol</BusinessName>
                        <BusinessDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere eu sapien vitae viverra. Phasellus justo mauris, pharetra a venenatis vitae, ultricies vulputate tellus. Suspendisse potenti. In egestas tortor eget dui commodo vehicula. Nulla facilisi. Nullam sollicitudin leo nec urna sagittis volutpat. Duis hendrerit libero non ex semper, a sagittis sapien malesuada.</BusinessDescription>
                        </ContainerText>
                    </ChooseTheJob>
                    <ChooseTheJob>
                        <LogoBusiness src="https://i.imgur.com/SY2GsO0.png" alt="LogoIndustries"/>
                        <ContainerText>                        
                        <BusinessName>Logo Industries</BusinessName>
                        <BusinessDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere eu sapien vitae viverra. Phasellus justo mauris, pharetra a venenatis vitae, ultricies vulputate tellus. Suspendisse potenti. In egestas tortor eget dui commodo vehicula. Nulla facilisi. Nullam sollicitudin leo nec urna sagittis volutpat. Duis hendrerit libero non ex semper, a sagittis sapien malesuada.</BusinessDescription>
                        </ContainerText>
                    </ChooseTheJob>
                    <ChooseTheJob>
                        <LogoBusiness src="https://i.imgur.com/zL3I65j.jpg" alt="Textiles"/>
                        <ContainerText>                        
                        <BusinessName>Aritex</BusinessName>
                        <BusinessDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere eu sapien vitae viverra. Phasellus justo mauris, pharetra a venenatis vitae, ultricies vulputate tellus. Suspendisse potenti. In egestas tortor eget dui commodo vehicula. Nulla facilisi. Nullam sollicitudin leo nec urna sagittis volutpat. Duis hendrerit libero non ex semper, a sagittis sapien malesuada.</BusinessDescription>
                        </ContainerText>
                    </ChooseTheJob>
                </ContainerJobs>
            </ContainerInfoJobs>
        </>
    )
}

export default Jobs
