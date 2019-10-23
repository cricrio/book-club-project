import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 60px;
`;

export function Logo() {
  return <Img alt="Coffe&Book" src="/logo.png" />;
}
