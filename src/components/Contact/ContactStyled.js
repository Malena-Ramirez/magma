import styled from "styled-components"
import { color } from "../GlobalStyles/color";

export const ImgTop = styled.div`
    background-image: url('https://i.imgur.com/mHX3fm7.jpg');
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

export const TitlePages = styled.h2`
    color: ${color.main};
    text-align: center;
    font-weight: 800;
`;
