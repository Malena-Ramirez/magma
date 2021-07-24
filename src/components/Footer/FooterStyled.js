import styled from "styled-components"

export const FooterContent = styled.div`
    background: #0F182E;
    border-top: 5px solid #FCA311;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    position: relative;
`;

export const LogoImg = styled.img`
    width: 60px;
    @media (min-width: 768px){
        width: 80px;
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
    color: #ccc; 
`;

export const RRSS = styled.i`
    margin: 0.5rem;
    display: flex;
`;