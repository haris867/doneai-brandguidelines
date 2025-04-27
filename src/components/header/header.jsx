import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  color: ${({ theme }) => theme.colors.primary.hex};
  padding: 1rem;

  @media (min-width: 768px) {
    padding-left: 2.5rem;
  }
`;

const LogoContainerImage = styled.img`
  max-width: calc(120px + 3vw);
  max-height: 100px;
  margin: 0px 10px;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 100vw;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <NavLink to="/">
          <LogoContainerImage src="./images/done-logo.svg"></LogoContainerImage>
        </NavLink>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
