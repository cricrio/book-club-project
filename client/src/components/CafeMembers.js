import React from "react";
import styled from "styled-components";

import { MemberCard } from "./MemberCard";

export const CafeMembers = ({ members }) => (
  <Container>
    {members.map(member => (
      <MemberCard member={member} />
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
