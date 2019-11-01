import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom';

const GET_CAFE = gql`
  query Cafe($id: ID!) {
    cafe(cafeId: $id) {
      id
      name
      city
      type
      description
      pic
      membersCount
      meetupsCount
      members {
        id
        identity {
          mini
        }
        pic
      }
      meetups {
        next {
          name
          date
          localisation
          participantsCount
        }
        past {
          name
          date
          localisation
          participantsCount
        }
      }
    }
  }
`;

export function useCafe() {
  const { data, loading, error } = useQuery(GET_CAFE, {
    variables: useParams()
  });
  return { cafe: data && data.cafe, error, loading };
}
