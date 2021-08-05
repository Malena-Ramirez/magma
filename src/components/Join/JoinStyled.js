import styled from "styled-components"
import { color } from "../GlobalStyles/color";

export const JoinContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 20px);
`;

export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
`;

export const ArrowBack = styled.i`
    font-size: 28px;
    cursor: pointer;
    color: ${color.dark};
    margin:10px;
`;

export const LoginContainer = styled.div`
    width: 40vw;
    min-width: 300px;
    max-width: 550px;
`;

export const AltLoginContainer = styled.div`
    display: flex;
    justify-content:space-evenly;
`;

export const AltIconContainer = styled.div`
    font-size: 35px;
    color: ${color.main};
`;

export const AlternativeText = styled.p`
    text-align: center;
    font-size: 0.875rem;
`;

export const AlternativeTextLink = styled.span`
    text-decoration: underline;
    cursor: pointer;
    color: ${color.main};
`;

export const ImageLogin = styled.img`
    width: 380px;
    height: auto;
    @media(min-width: 768px){
        width: 450px;
    }
    @media(min-width: 1100px){
        width: 600px;
    }
`;