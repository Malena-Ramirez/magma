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
    display: flex;
    align-items: center;
  justify-content: center;
`;

export const ContainerInfoJobs = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;
    margin: 2em;
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
    @media (max-width: 400px){
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

export const TitlePages = styled.h2`
    color: ${color.dark};
    text-align: center;
    font-size: 4em;
    @media (max-width: 500px){
        font-size: 3em;
    };
`;

export const ContainerInputs = styled.div`
    width: 20%;
`;

export const ContainerJobs = styled.div`
    
`;