import styled from "styled-components"

export const HeaderContent = styled.div`
    background: #23396C;
    width: 100%;
    margin: 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

export const ButtonHead = styled.button`
    background:#ffc107;
    border: 0px;
    border: 2px solid #ffc107;
    border-radius: .15rem;
    padding: .25rem .5rem;
    margin: .3em;
    font-size: 0.7rem;
    color: #23396C;
    &:hover{
        color: #23396C;
    }
    @media (min-width: 768px){
        border-radius: .3rem;
    padding: .5rem 1rem;
    margin: .3em;
    font-size: 1rem;
}
    
`; 

export const ButtonSignUp = styled.button`
    background: #23396C;
    border: 2px solid #ffc107;
    color: #ffc107;
    border-radius: .15rem;
    padding: .25rem .5rem;
    margin: .3em;
    font-size: 0.7rem;
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