import React from 'react'
import { 
    ImgTop, 
    ContainerInfoJobs, 
    ChoicePlace, 
    ChooseTheJob, 
    LogoBusiness, 
    BusinessName, 
    BusinessDescription,
    ContainerText } from "./JobsStyled";
import { Form, FloatingLabel } from 'react-bootstrap';

const Jobs = () => {
    return (
        <>
            <ImgTop>
            </ImgTop>
            <ContainerInfoJobs>
                <ChoicePlace name="lugar" id="lugar">
                    <option value="Ciudad">Ciudad</option>
                    <option value="Bogotá">Bogotá</option>
                    <option value="Medellin">Medellin</option>
                    <option value="Cartagena">Cartagena</option>
                </ChoicePlace>
                <Form.Group controlId='formBasicSearch'>
                      <FloatingLabel controlId='floatingSearch' label='Buscar empleo'>
                        <Form.Control
                          type='search' 
                          placeholder='Buscar'
                          name='search'
                        />
                      </FloatingLabel>
                    </Form.Group>
                <ChoicePlace name="lugar" id="lugar">
                    <option value="Ciudad">Horario</option>
                    <option value="Bogotá">Diurno</option>
                    <option value="Medellin">Nocturno</option>
                    <option value="Cartagena">Remoto</option>
                </ChoicePlace>
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
            </ContainerInfoJobs>
        </>
    )
}

export default Jobs
