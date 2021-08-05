import React from 'react'
import { 
    ChooseTheJob, 
    LogoBusiness, 
    ContainerText, 
    BusinessName, 
    BusinessDescription } from "./JobsStyled";
import MyVerticallyCenteredModal from "./ModalJobs";

const JobCards = ({image, name}) => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <ChooseTheJob onClick={() => setModalShow(true)}>
                <LogoBusiness src={image} alt={name}/>
                <ContainerText>                        
                    <BusinessName>{name}</BusinessName>
                    <BusinessDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere eu sapien vitae viverra. Phasellus justo mauris, pharetra a venenatis vitae, ultricies vulputate tellus. Suspendisse potenti. In egestas tortor eget dui commodo vehicula. Nulla facilisi. Nullam sollicitudin leo nec urna sagittis volutpat. Duis hendrerit libero non ex semper, a sagittis sapien malesuada.</BusinessDescription>
                </ContainerText>
            </ChooseTheJob>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default JobCards
