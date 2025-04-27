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

export const SubSubtitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  text-decoration: underline;
`;

export const Bodytext = styled.p`
  font-size: 15px;
  padding-bottom: 2rem;
  font-weight: 400;
`;

export const Section = styled.div`
  padding: 0rem 0;
`;

export const LogoImage = styled.img`
  max-height: 100px;

  @media (max-width: 768px) {
    max-height: 70px;
  }
`;

export const LogoIconImage = styled.img`
  max-height: 100px;

  @media (max-width: 768px) {
    max-height: 70px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  margin: 2rem auto;
`;

export const LightImageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral1.hex};
  border-radius: 30px;
  padding: 1rem;
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

export const TitleColorsContainer = styled(ColorsContainer)`
  justify-content: start;
  gap: 100px;
`;

export const FontBox = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;
export const FontLetters = styled.div`
  display: flex;
  font-size: 90px;
`;

export const AlphabetContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0;
`;

export const AlphabetLetters = styled.p`
  margin: 2px;
`;
export const StyleInfo = styled.div`
  margin: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  font-weight: 300;
`;

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.hex};
  color: ${({ theme }) => theme.colors.neutral3.hex};
  border: none;
  border-radius: 30px;
  padding: 10px 40px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.colors.neutral3.hex};
  color: ${({ theme }) => theme.colors.primary.hex};
  border: 2px solid ${({ theme }) => theme.colors.primary.hex};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

export const DarkButtonContainer = styled(ButtonContainer)`
  background-color: ${({ theme }) => theme.colors.neutral1.hex};
  border-radius: 3em;
`;

export const DarkPrimaryButton = styled(PrimaryButton)`
  color: ${({ theme }) => theme.colors.neutral1.hex};
  background-color: ${({ theme }) => theme.colors.secondary.hex};
`;

export const DarkSecondaryButton = styled(SecondaryButton)`
  color: ${({ theme }) => theme.colors.secondary.hex};
  border: 2px solid ${({ theme }) => theme.colors.secondary.hex};
  background-color: ${({ theme }) => theme.colors.neutral1.hex};
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral1.hex};
  height: 200px;
  width: 300px;
  border-radius: 3em;
`;
