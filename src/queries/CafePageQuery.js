import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { CafeFragment } from "../fragments/Cafe";

export const CafePageQuery = ({ cafeId, children }) => (
  <Query query={query} variables={{ cafeId }}>
    {children}
  </Query>
);

const query = gql`
  query Cafe($cafeId: uuid!) {
    cafe(where: { id: { _eq: $cafeId } }) {
      ...CafeBase
      ...MemberTotal
    }
  }

  ${CafeFragment.cafeBase}
  ${CafeFragment.memberTotal}
`;
