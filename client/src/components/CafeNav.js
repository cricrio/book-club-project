import React from 'react';

import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

//To be improved for mobile use
//TODO hide scrollbar
export const CafeNav = styled.ul`
  display: flex;
  margin: 1rem 0;
  padding-left: 0;
  border-style: solid none;
  border-width: thin;
  overflow: hidden;
  overflow-x: auto;
`;

export const CafeNavItem = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  padding: 1rem;

  :hover {
    font-weight: bold;
    color: var(--mdc-theme-text-secondary-on-background);
  }
`;

export const CafeNavLink = ({ children, ...props }) => (
  <CafeNavItem
    {...props}
    activeClassName="mdc-theme--text-secondary-on-background"
  >
    {children}
  </CafeNavItem>
);
