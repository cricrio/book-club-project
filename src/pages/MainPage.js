import React from "react";
import styled from "styled-components";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { CafeCard } from "../components/CafeCard";

const query = gql`
  {
    cafe {
      id
      name
      description
      pic
    }
  }
`;

export const MainPage = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const cafes = data.cafe.map(makeCafes);
      return <StyledDiv className="MainPage">{cafes}</StyledDiv>;
    }}
  </Query>
);

const makeCafes = cafe => <CafeCard {...cafe} key={cafe.id} />;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  align-items: center;
`;
