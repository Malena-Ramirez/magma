import styled from "styled-components"
import { color } from "../GlobalStyles/color";

export const ImgTop = styled.div`
    background-image: url('https://i.imgur.com/OGS6Kqd.jpg');
    width: 100%;
    height: 35vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: brightness(40%); // Más oscura
    margin-bottom: 2em;
`;

export const ContainerInfoJobs = styled.div`
    display: grid;
    grid-template-columns: 1fr;
  padding: 20px;
  @media(min-width: 768px){
    grid-template-columns: 1fr 3fr;
    padding: 20px 30px;
    gap: 5px;
  }
  @media(min-width: 992px){
    gap: 25px;
    padding: 20px 50px;
  }
`;

export const ChoicePlace = styled.select`
    width: 100%;
    height: 3.5em;
    border: 0.1em solid #cecece;
    border-radius: 0.25rem;
      
`;

export const LogoBusiness = styled.img`
    display: flex;
    width: 6em;
    height: 6em;
    margin: 0.8em;
    align-items:center;
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
    cursor: pointer;
    @media (max-width: 800px){
        flex-wrap: wrap;
    }
`;

export const BusinessName = styled.h3`
    text-align: left;
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
    
`;

export const ContainerJobs = styled.div`
    
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
        transition: 50ms;
    }
`;
export const ContentButton = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const DescriptionJobTop = styled.p`
    font-size: 0.8rem;
    color: #a1a1a1;
`;