import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarWrapper = styled.nav`
  width: 150px;
  height: 100vh;
  padding: 2.5rem;
  position: fixed;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    padding: 1rem 0;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    overflow-x: auto;
    white-space: nowrap;
    min-width: 100%;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.colors.neutral1.hex};
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 14px;

  &.active {
    font-weight: 900;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent1.hex};
  }

  @media (max-width: 768px) {
    display: inline-block;
    padding: 0.5rem 1rem;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <StyledNavLink to="/" exact>
        Welcome
      </StyledNavLink>
      <StyledNavLink to="/brand-dna">Brand DNA</StyledNavLink>
      <StyledNavLink to="/logo">Logo</StyledNavLink>
      <StyledNavLink to="/colors">Colors</StyledNavLink>
      <StyledNavLink to="/designguide">Design Guide</StyledNavLink>
    </SidebarWrapper>
  );
};

export default Sidebar;
