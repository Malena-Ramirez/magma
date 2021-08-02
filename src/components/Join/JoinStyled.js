import styled from "styled-components"
import { color } from "../GlobalStyles/color";

export const ArrowBack = styled.i`
    font-size: 28px;
    cursor: pointer;
    color: ${color.dark};
`;

export const LoginContainer = styled.div`
    width: 40vw;
    min-width: 250px;
    margin: 0 auto;
`;

export const ProfileIcon = styled.i`
    font-size: 130px;
    color: ${color.main};
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

export const ContainerImg = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const ImageLogin =styled.img`
    width: 366px;
    height: 389px;
`;