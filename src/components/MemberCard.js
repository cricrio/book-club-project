import React from "react";
import styled from "styled-components";

import { Avatar } from "./Avatar";

export const MemberCard = ({ member: { pic, username } }) => (
  <Card>
    <Avatar src={pic} />
    <Name>{username}</Name>
  </Card>
);

const Card = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const Name = styled.div`
  font-weight: bold;
  text-align: center;
`;
