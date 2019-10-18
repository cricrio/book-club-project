import React from "react";
import styled from "styled-components";

import { Avatar } from "./Avatar";

export const MemberCard = ({ member: { pic } }) => (
  <Card>
    <Avatar src={pic} />
  </Card>
);

const Card = styled.div`
  padding: 1rem;
`;
