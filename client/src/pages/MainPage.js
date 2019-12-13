import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import { CafeCard } from '../components/CafeCard';

const GET_CAFES = gql`
  query GetCafes {
    Cafe {
      id
      name
      city
      description
      pic
    }
  }
`;

export const MainPage = () => {
  const { loading, error, data } = useQuery(GET_CAFES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const cafes = data.Cafe.map(makeCafes);
  return <StyledDiv className="MainPage">{cafes}</StyledDiv>;
};

const makeCafes = cafe => <CafeCard {...cafe} key={cafe.id} />;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 5rem;
`;
