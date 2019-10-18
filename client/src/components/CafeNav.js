import React from "react";

import styled from "styled-components";

import { UndecoratedLink } from "./UndecoratedLink";

//Ca be improve for mobile use
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

export const CafeNavItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  padding: 1rem;

  :hover {
    color: green;
  }
`;

export const CafeNavLink = ({ children, ...props }) => (
  <CafeNavItem>
    <UndecoratedLink {...props}>{children}</UndecoratedLink>
  </CafeNavItem>
);
