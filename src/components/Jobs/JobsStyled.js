import styled from "styled-components"
import { color } from "../GlobalStyles/color";

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
    flex-direction: row;
    margin: 2em;
    @media (max-width: 650px){
        flex-wrap: wrap;
    }
`;

export const ChoicePlace = styled.select`
    width: 100%;
    height: 3.5em;
    border: 0.1em solid #cecece;
    border-radius: 0.25rem;
      
`;

export const LogoBusiness = styled.img`
    width: 8em;
    height: 8em;
    margin: 0.8em;
    @media (max-width: 600px){
        width: 5em;
        height: 5em;
    };
    @media (max-width: 400px){
        width: 4em;
        height: 4em;
    };
`;

export const ChooseTheJob = styled.div`
    display: flex;
    flex-direction: row;
    width: 96.5%;
    margin: 0.5em;
    border-top: 0.1em solid #cecece;
    @media (max-width: 800px){
        flex-wrap: wrap;
    }
`;

export const BusinessName = styled.h3`
    text-align: center;
`;

export const BusinessDescription = styled.p`
    text-align: justify;
`;

export const ContainerText = styled.span`
    padding: 0.5em;
`;

export const TitlePages = styled.h1`
    color: ${color.main};
    text-align: center;
    font-weight: 800;
`;

export const ContainerInputs = styled.div`
    width: 50%;
    display: inline-block;
`;

export const ContainerJobs = styled.div`
    display: inline-block;
`;

export const ButtonJobs =styled.button`
    border: 1px solid ${color.dark};
    color: ${color.dark};
    border-radius: 0.2em;
    display: flex;
    flex-direction: column;
    width: 8em;
    height: 3.5em;
    margin: 0.5em;
    justify-content: center;
    align-items: center;    
    &:hover{
        background-color: ${color.secondary};
        color: ${color.dark};
        border-color: ${color.secondary};
        transition: 100ms;
    }
`;
export const ContentButton = styled.div`
    display: flex;
    flex-wrap: wrap;
`;