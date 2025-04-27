import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  // background-color: ${({ theme }) => theme.colors.primary.hex};
  color: white;
  padding: 1rem;
  margin-top: auto;
  z-index: 2;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const LogoContainerImage = styled.img`
  max-width: calc(30px + 3vw);
  max-height: 50px;
  margin: 0px 10px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <LogoContainerImage src="./images/done-logo.svg"></LogoContainerImage>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
