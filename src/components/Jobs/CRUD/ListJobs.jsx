import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useForm } from '../../../hook/useForm';

const ListJobs = () => {

    const {active:jobs} = useSelector(state => state.jobs);
    // console.log('job activo', jobs)

    const [values, handleInputChange] = useForm(jobs)
    const {jobName, description, requirements, type, city, salary, workDay} = values;



    return (
        <>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Puesto</th>
                        <th>Descripcion</th>
                        <th>Requisitos</th>
                        <th>Modalidad</th>
                        <th>Ciudad</th>
                        <th>Salario</th>
                        <th>Tipo de jornada</th>
                        <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>                    
                    </tbody>
                </Table>
            </Container>            
        </>
    )
}

export default ListJobs
