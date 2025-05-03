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

export const HomeTextContainer = styled.div`
  position: absolute;
  z-index: 10;
  color: #fbfbfb;
  max-width: 900px;

  & > h1 {
    font-weight: 600;
    margin: 0 auto;
    text-align: center;
  }
  & > p {
    margin: 0 auto;
    font-size: 18px;
    width: 70%;
  }

  @media (min-width: 768px) {
    padding: 0px;
  }
`;

export const LogoCatchPhrase = styled.span`
  font-weight: 600;
  font-size: inherit;
  &:before {
    content: " ";
  }
`;

const DoneContainer = styled.span`
  margin-left: 2px;
`;

const StyledN = styled.span`
  margin: 0 -0.5px;
  font-family: "Open Sans";
  font-size: 0.9em;
  font-weight: 700;
`;

const StyledTM = styled.sup`
  font-size: 8px;
`;

export const DoneTM = () => (
  <DoneContainer>
    do
    <StyledN>п</StyledN>e<StyledTM>™</StyledTM>
  </DoneContainer>
);

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3em;

  & > div {
    flex: 1 1 100%;
  }

  @media (min-width: 768px) {
    & > div {
      flex: 1 1 calc(45%);
    }
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
