import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

export const CafePageQuery = ({ cafeId, children }) => (
  <Query query={query} variables={{ cafeId }}>
    {children}
  </Query>
);


