import styled from "styled-components"

export const HeaderContent = styled.div`
    background: #23396C;
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
    border: 2px solid #ffc107;
    border-radius: .15rem;
    padding: .25rem .5rem;
    margin: .3em;
    font-size: 0.7rem;
    color: #ffc107;
    &:hover{
        color: #23396C;
        background-color: #ffc107;
    }
    @media (min-width: 768px){
        border-radius: .3rem;
        padding: .5rem 1rem;
        margin: .3em;
        font-size: 1rem;
}
    
`;

// export const ButtonSignUp = styled.button`
//     background: #23396C;
//     border: 2px solid #ffc107;
//     color: #ffc107;
//     border-radius: .15rem;
//     padding: .25rem .5rem;
//     margin: .3em;
//     font-size: 0.7rem;
//     @media (min-width: 768px){
//         border-radius: .3rem;
//     padding: .5rem 1rem;
//     margin: .3em;
//     font-size: 1rem;
// }
// `;

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