import styled from "styled-components";
import { color } from "../GlobalStyles/color";

export const FooterContent = styled.div`
    background: ${color.dark};
    border-top: 20px solid ${color.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    position: relative;
`;

export const LogoImg = styled.img`
    width: 85px;
    margin-bottom: 25px;
    @media (min-width: 768px){
        width: 110px;
    }
`;

export const ContentLogo = styled.div`
    display: flex;
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    color: ${color.light}; 
`;

export const RRSS = styled.i`
    margin: 0.5rem;
    display: flex;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover{
        color: ${color.secondary};
    }
`;

export const AboutUs = styled.p`
    color: ${color.light}; 
    margin: 0;
    margin-top: 10px;
`