import styled from "styled-components"
import { color } from "../GlobalStyles/color";

export const ProfileContainer = styled.div`
    min-height: 80vh;
    margin: 30px auto; 
    width: 90vw;
    max-width: 800px;
    min-width: 285px;
    @media(min-width:425px) {
        width: 80vw; 
    }
`;

export const UserBasicInfo = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

export const ContainerNamePhoto = styled.div`
    margin-right: 25px;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`;

export const UserName = styled.h2`
    color: ${color.main};
    margin-bottom: 0px;
    letter-spacing: 5px;
`;

export const ProfileEdit = styled.i`
    margin-left: 20px;
    cursor: pointer;
    color:${color.main};
    &:hover{
    color:${color.secondary};
    }
`;

export const MoreInfo = styled.div`
    display: grid;
    gap: 15px;
`;

export const TitleAboutMe = styled.h3`
    text-align: left;
`;

export const AboutMeText = styled.div`
    margin-left: 0.5em;
`;

export const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #f7f7f7;
    padding: 1.5em;
    border-radius: 0.3em;
    margin-top: 0.7em;
    margin-bottom: 0.7em;
`;
