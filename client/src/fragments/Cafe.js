import { gql } from "apollo-boost";

export const CafeFragment = {
  memberTotal: gql`
    fragment MemberTotal on Cafe {
      cafe_members_aggregate {
        aggregate {
          count
        }
      }
    }
  `,
  cafeBase: gql`
    fragment CafeBase on Cafe {
      id
      name
      description
      city
      pic
    }
  `
};
