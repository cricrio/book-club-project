import React from 'react';
import styled from 'styled-components';

export const MemberCard = ({ pic, name }) => (
  <Card>
    <Avatar src={pic} alt={name} />
  </Card>
);

const Card = styled.div`
  text-align: center;
  margin: 1rem;
`;

const Avatar = styled.img`
  display: inline-block;
  border-radius: 50px;
  width: 4rem;
  height: 4rem;
`;
