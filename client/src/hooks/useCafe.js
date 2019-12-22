import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom';

const GET_CAFE = gql`
  query Cafe($id: ID) {
    Cafe(id: $id) {
      id
      name
      city
      type
      description
      pic
      meetupCount
      memberCount
    }
  }
`;

export function useCafe() {
  const { data, loading, error } = useQuery(GET_CAFE, {
    variables: useParams()
  });
  console.log({ data });
  return { cafe: data?.Cafe[0], error, loading };
}
