import styled from "styled-components";

// Text

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 33px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 23px;
  font-weight: 500;
  padding: 2rem 0;

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const SubSubtitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  text-decoration: underline;

  @media (min-width: 768px) {
    font-size: 21px;
  }
`;

export const Bodytext = styled.p`
  font-size: 15px;
  padding-bottom: 2rem;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

// Images

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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

export const LogoImage = styled.img`
  max-height: 100px;

  @media (max-width: 768px) {
    max-height: 70px;
  }
`;
