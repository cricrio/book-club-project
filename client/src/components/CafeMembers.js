import React from 'react';
import styled from 'styled-components';

import { MemberCard } from './MemberCard';

export const CafeMembers = ({ members }) => (
  <Container>
    {members.map(({ name, pic }) => (
      <MemberCard name={name} pic={pic} />
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
