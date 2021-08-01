import styled from "styled-components";
import { color } from "../GlobalStyles/color";

export const HeaderContent = styled.div`
    background: ${color.main};
    width: 100%;
    margin: 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    position:fixed;
    box-shadow: 0px 3px 25px 0px rgba(0,0,0,0.5);
    -webkit-box-shadow: 0px 3px 25px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 3px 25px 0px rgba(0,0,0,0.5);
`;

export const ButtonHeader = styled.button`
    background:transparent;
    border: 0px;
    border: 2px solid ${color.secondary};
    border-radius: .15rem;
    padding: .25rem .5rem;
    margin: .3em;
    font-size: 0.7rem;
    color: ${color.secondary};
    &:hover{
        color: ${color.main};
        background-color: ${color.secondary};
    }
    @media (min-width: 768px){
        border-radius: .3rem;
        padding: .5rem 1rem;
        margin: .3em;
        font-size: 1rem;
    }
`;

export const ContentButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const LogoImg = styled.img`
    width: 60px;
    @media (min-width: 768px){
        width: 80px;
    }
`;

export const ContentLogo = styled.div`
    display: flex;
    align-items: center;
`;