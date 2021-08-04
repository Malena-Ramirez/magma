import styled from "styled-components"

export const ContainerTopHome = styled.div`
    background-image: url('https://i.imgur.com/J99xLst.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 30vh;
    filter: brightness(40%); // Más oscura
    margin-bottom: 2em;
`;

export const ContainerAll= styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 20px;
    @media (min-width: 700px){
        grid-template-columns: 1fr 1fr;
    }
`;

export const ContainerJobandLessons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px; 
    margin-bottom: 2em;  
    box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.38);
    -webkit-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.38);
    -moz-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.38); 
    border-radius: 0.2rem;
    cursor: pointer;
`;

export const ImageCard = styled.img`
    width: 20vw;
    margin: 0.9em;
    border-radius: 0.2rem;
`;

export const TextHome = styled.p`
    font-size: 0.3;
`;

export const TitleText = styled.h3`
    display: flex;
    font-size: 1.2em;
`;

export const ContainerText = styled.span`
    display: flex;
    flex-direction: column;
`;