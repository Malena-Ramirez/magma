import React from 'react'
import { ContainerNamePhoto } from "./ProfileStyled";
import { Image } from 'react-bootstrap'

const Profile = () => {
    return (
        <>
            <ContainerNamePhoto>
                <Image 
                    style={{width:"100px"}}
                    roundedCircle={true}
                    className="fluid" 
                    src='https://www.wrkbemanning.no/wp-content/uploads/2017/04/profile-pic-dummy.jpg' 
                    alt="foto de perfil"
                />
                <h2>Pepito Martinez</h2>
                <p>Infomarción</p>
                
            </ContainerNamePhoto>
        </>
    )
}

export default Profile
