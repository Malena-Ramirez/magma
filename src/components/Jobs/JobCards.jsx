import React from 'react'
import { 
    ChooseTheJob, 
    LogoBusiness, 
    ContainerText, 
    BusinessName, 
    BusinessDescription } from "./JobStyled";
const JobCards = () => {
    const jobCard = [
        "https://i.imgur.com/NQDgHj8.png",
        "https://i.imgur.com/SY2GsO0.png",
        "https://i.imgur.com/zL3I65j.jpg"
    ]
    return (
        <div>
            <ChooseTheJob>
                        <LogoBusiness src="https://i.imgur.com/zL3I65j.jpg" alt="Textiles"/>
                        <ContainerText>                        
                        <BusinessName>Aritex</BusinessName>
                        <BusinessDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere eu sapien vitae viverra. Phasellus justo mauris, pharetra a venenatis vitae, ultricies vulputate tellus. Suspendisse potenti. In egestas tortor eget dui commodo vehicula. Nulla facilisi. Nullam sollicitudin leo nec urna sagittis volutpat. Duis hendrerit libero non ex semper, a sagittis sapien malesuada.</BusinessDescription>
                        </ContainerText>
                    </ChooseTheJob>
        </div>
    )
}

export default JobCards
