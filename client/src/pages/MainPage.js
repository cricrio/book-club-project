import React from 'react';
import styled from 'styled-components';

import { MainPageQuery } from '../queries/MainPageQuery';

import { CafeCard } from '../components/CafeCard';

export const MainPage = () => (
  <MainPageQuery>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const cafes = data.cafes.map(makeCafes);
      return <StyledDiv className="MainPage">{cafes}</StyledDiv>;
    }}
  </MainPageQuery>
);

const makeCafes = cafe => <CafeCard {...cafe} key={cafe.id} />;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  align-items: center;
`;
