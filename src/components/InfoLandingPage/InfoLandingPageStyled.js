import styled from "styled-components";
import { color } from "../GlobalStyles/color";

export const ImgLanding = styled.img`
  width: 100%;
  height: auto;
`;

export const LandingTitle = styled.h1`
  text-align: center;
  margin: 30px 0 20px;
  color: ${color.main};
  font-weight: 800;
`;

export const LandingTextContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const LandingText = styled.p`
  margin: 0 20px;
  text-align: justify;
  font-size: 1.2rem;
  max-width:900px;
`;