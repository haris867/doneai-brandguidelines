import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 900;
`;
export const Subtitle = styled.h2`
  font-size: 23px;
  font-weight: 600;
  padding: 2rem 0;
`;

export const Bodytext = styled.p`
  font-size: 15px;
  padding-bottom: 2rem;
  font-weight: 300;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
`;

const LogoImage = styled.img`
  max-height: 100px;

  @media (max-width: 768px) {
    max-height: 70px;
  }
`;
// const LogoIconImage = styled.img`
//   max-height: 100px;

//   @media (max-width: 768px) {
//     max-height: 70px;
//   }
// `;

export default function Logo() {
  return (
    <div>
      <Helmet>
        <title>Done.ai | Logo</title>
      </Helmet>
      <Title>Logo</Title>
      <Subtitle>About our logo</Subtitle>
      <Bodytext>Coming soon 🫶</Bodytext>
      <ImageContainer>
        <LogoImage src="./images/done-logo.svg" />
      </ImageContainer>
    </div>
  );
}
