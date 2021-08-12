import styled from "styled-components"

export const ContainerTopHome = styled.div`
    background-image: url('https://i.imgur.com/J99xLst.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 40vh;
    filter: brightness(40%); // Más oscura
    margin-bottom: 2em;
`;

export const ContainerAll= styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3em;
    width: 70%;
    margin: 0 auto;
    padding: 3em;
    @media (min-width: 700px){
        grid-template-columns: 1fr 1fr;
    }
`;

export const ContainerJobandLessons = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;  
    background: #f5f5f5;
    box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.38);
    -webkit-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.38);
    -moz-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.38); 
    border-radius: 10px;
    cursor: pointer;
`;

export const ImageCard = styled.img`
    width: 100%;
    height: auto;
    border-radius: 0.2rem;
`;

export const TextHome = styled.p`
    font-size: 0.3;
    padding: 0.2em 1em;
    text-align: center;
`;

export const TitleText = styled.h3`
    font-size: 1.2em;
    text-align: center;
`;

export const ContainerText = styled.span`
    margin-left: 1em;
`;