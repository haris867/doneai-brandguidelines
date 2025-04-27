import React from "react";
import theme from "../../theme/theme.jsx";
import * as S from "./index.styles.js";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const LogoColorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LogoColorBox = styled.div`
  height: 150px;
  width: 150px;
  background-color: ${({ bgColor }) => bgColor};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
    border-radius: 30px;
  }
`;
const LogoColor = styled.svg`
  max-width: 100px;
  max-height: 80px;
  .path-fill {
    fill: ${({ fillColor }) => fillColor || "white"};
  }
  .path-stroke {
    stroke: ${({ strokeColor }) => strokeColor || "white"};
  }

  @media (max-width: 768px) {
    max-width: 60px;
    max-height: 40px;
  }
`;

export default function Colors() {
  const colors = Object.keys(theme.colors);

  return (
    <div>
      <Helmet>
        <title>Done.ai | Colors</title>
      </Helmet>
      <S.Title>Ours Colors</S.Title>
      <S.Section>
        <S.Subtitle>Palette</S.Subtitle>
        <S.Bodytext>
          Our visual identity is designed to reflect who we are: bold,
          intelligent, and approachable. The palette combines depth and energy,
          creating a balance between stability and forward momentum. It brings a
          sense of clarity, confidence, and innovation, which builds an
          environment where our customers feel empowered, supported, and ready
          to move smarter into the future.
        </S.Bodytext>
        <S.ColorsContainer>
          {colors.map((key) => (
            <S.ColorBoxWrapper key={key}>
              <S.ColorBox color={theme.colors[key].hex} />
              <S.ColorName>{theme.colorNames[key]}</S.ColorName>
              <S.ColorCode>{theme.colors[key].hex}</S.ColorCode>
              <S.RgbCode>{theme.colors[key].rgb}</S.RgbCode>
            </S.ColorBoxWrapper>
          ))}
        </S.ColorsContainer>
      </S.Section>
      <S.Section>
        <S.Subtitle>Combinations</S.Subtitle>
        <S.Bodytext>Coming soon 🫶</S.Bodytext>
      </S.Section>
    </div>
  );
}
