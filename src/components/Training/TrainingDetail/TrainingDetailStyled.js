import styled from "styled-components";
import { color } from "../../GlobalStyles/color";

export const TrainingDetailContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TrainingDetailTitle = styled.h1`
  text-align: center;
  color: ${color.main};
  font-weight: 800;
  margin: 20px 0;
`;

export const DescriptionContainer = styled.p`
  width: 850px;
  margin-bottom: 25px; 
`;

export const Description = styled.p`
  text-align: justify;
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const AuthorImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;


export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size:0.875rem;
`;

// export const AuthorText = styled.span`

// `;