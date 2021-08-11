import styled from "styled-components"
import { color } from "../GlobalStyles/color";

export const ContainerNamePhoto = styled.div`
    display: flex;
`;

export const UserName = styled.h2`
    text-align: left;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    
`;

export const UserBasicInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 1em;
`;

export const AboutMeText = styled.div`
    margin-left: 1em;
`;

export const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60vw;
    background: #f7f7f7;
    padding: 1.5em;
    border-radius: 0.3em;
    margin-top: 0.7em;
    margin-bottom: 0.7em;
`;
export const TitleAboutMe = styled.h3`
    text-align: left;
`;

export const PublicityBusiness = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

export const MoreInfo = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 15px;
`;

export const Sponsor = styled.span`
    background: #f7f7f7;
    border-radius: 0.3em;
    padding: 0.7em;
    margin-bottom: 0.7em;
    width: 20vw;
`;

export const ProfileEdit = styled.span`
    cursor: pointer;
    &:hover{
        color:${color.main};
        text-decoration: underline;
    }
`;

export const ImgTop = styled.div`
    background-image: url('https://i.imgur.com/0kdUjtj.jpg');
    width: 100%;
    height: 35vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: brightness(40%); // Más oscura
    margin-bottom: 2em;
`;
