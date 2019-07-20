import React from "react";
import styled from "styled-components";

export const CafeButton = ({ isMember, ...props }) => (
  <Button isMember={isMember} {...props}>
    {isMember ? "Rejoindre" : "Quitter"}
  </Button>
);

const Button = styled.button`
  background-color: inherit;
  padding: 0.25rem;
  border: 2px solid ${({ isMember }) => (isMember ? "royalblue" : "red")};
  border-radius: 4px;
`;
