import styled from "styled-components"

export const ImgTop = styled.div`
    background-image: url('https://i.imgur.com/ir9dROE.jpg');
    width: 100%;
    height: 35vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: brightness(40%); // Más oscura
    margin-bottom: 2em;
`;

export const ContainerInfoAspirant = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px;
`;

export const ContainerAspirant = styled.div`
    display: flex;
    flex-direction: row;
    width: 96.5%;
    margin: 0.5em;
    border-top: 0.1em solid #cecece;
    cursor: pointer;
`;