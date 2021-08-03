import React from 'react'
import { ImgTop, ContainerInfoJobs, ChoicePlace } from "./JobsStyled";

const Jobs = () => {
    return (
        <>
            <ImgTop>
            </ImgTop>
            <ContainerInfoJobs>
                <ChoicePlace name="lugar" id="lugar">
                    <option value="Ciudad" disabled>Ciudad</option>
                    <option value="Bogotá">Bogotá</option>
                    <option value="Medellin">Medellin</option>
                    <option value="Cartagena">Cartagena</option>
                </ChoicePlace>
            </ContainerInfoJobs>
        </>
    )
}

export default Jobs
