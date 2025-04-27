import styled from "styled-components";

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
`;
export const Subtitle = styled.h2`
  font-size: 23px;
  font-weight: 500;
  padding: 2rem 0;
`;

export const Bodytext = styled.p`
  font-size: 15px;
  padding-bottom: 2rem;
  font-weight: 300;
`;

export const Section = styled.div`
  padding: 0rem 0;
`;

export const ColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`;

export const ColorBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
`;

export const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: ${({ color }) => color};
  border: ${({ color }) =>
    color === "#FBFBFB" ? "1px solid #0F0633" : "none"};
  border-radius: 35px;
  padding: 10px;
`;

export const ColorName = styled.div`
  font-size: 12px;
  font-weight: 800;
  margin: 10px 0;
  text-align: center;
`;

export const ColorCode = styled.div`
  font-size: 11px;
  text-align: center;
  margin: 2px 0;
`;

export const RgbCode = styled.div`
  font-size: 11px;
  text-align: center;
  margin: 2px 0;
`;

export const ColorRowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  padding: 20px;
  border: ${({ bgColor }) =>
    bgColor === "#F8F8F8" ? "1px solid #1A2345" : "none"};

  border-radius: 25px;
  margin-bottom: 45px;
`;

export const ColorRowBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
`;

export const hiddenColors = {
  primary: ["neutral1"],
  secondary: ["neutral2", "neutral3", "accent1", "accent2"],
  neutral1: ["primary"],
  neutral2: ["secondary", "neutral3", "accent1", "accent2"],
  neutral3: ["secondary", "neutral2", "accent1", "accent2"],
  accent1: ["secondary", "neutral2", "neutral3", "accent2"],
  accent2: ["secondary", "neutral2", "neutral3", "accent1"],
};

export const ColorRowBox = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ color }) => color};
  border-radius: 20px;
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    border-radius: 15px;
  }
`;
