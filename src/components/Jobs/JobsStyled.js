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
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const ChoicePlace = styled.select`
    width: 25em;
    height: 3.5em;
    border: 0.1em solid #cecece;
    border-radius: 0.25rem;
    @media (max-width: 420px){
        width: 100%;
    }    
`;

export const LogoBusiness = styled.img`
    width: 8em;
    margin: 0.8em;
`;

export const ChooseTheJob = styled.div`
    display: flex;
    flex-direction: row;
    /* background: #ffffff; */
    width: 96.5%;
    margin: 0.5em;
    border-top: 0.1em solid #cecece;
    /* border-radius: 0.2em; */
    
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
    color: ${color.secondary};
    text-align: center;
    font-size: 6em;
`;