import React from 'react'
import { Container, FloatingLabel, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { TitlePages } from '../Jobs/JobsStyled'
import AspirantCard from './AspirantCard'
import { ContainerInfoAspirant, ImgTop } from './AspirantStyled'

const Aspirant = () => {    

    const aspirants = [
        {
            'id': 1,
            'img': 'https://i.imgur.com/RGOwRp5.jpg',
            'name': 'Sarah Hills'
        },
        {
            'id': 2,
            'img': 'https://i.imgur.com/5zqKoG9.png',
            'name': 'José Manrrique'
        },
        {
            'id': 3,
            'img': 'https://i.imgur.com/gseyOXL.png',
            'name': 'Ricardo Ramirez'
        }
    ]

    return (
        <>
        <ImgTop>
        </ImgTop>
        <Container>
            <TitlePages>
            Aspirantes
            </TitlePages> 
            <ContainerInfoAspirant>
                <Form.Group controlId='formBasicSearch' className="mb-3">
                    <FloatingLabel controlId='floatingSearch' label='Buscar aspirante'>
                        <Form.Control
                            type='search' 
                            placeholder='Buscar'
                            name='search'
                        />
                    </FloatingLabel>
                </Form.Group>
                {
                    aspirants.map(aspirant =>(
                        <AspirantCard
                            key={aspirant.id    }
                            img={aspirant.img}
                            name={aspirant.name}
                        />
                    ))
                }
                
            </ContainerInfoAspirant>
        </Container>
        
        </>
    )
}

export default Aspirant
