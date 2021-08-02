import styled from "styled-components"

export const ImgTop = styled.div`
    background-image: url('https://i.imgur.com/OGS6Kqd.jpg');
    width: 100%;
    height: 30vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: brightness(40%); // Más oscura
    margin-bottom: 2em;
`;

export const ContainerInfoJobs = styled.div`
    display: flex;
`;

export const ChoicePlace = styled.select`
    width: 25em;
    @media (max-width: 420px){
        width: 100%;
    }    
`;