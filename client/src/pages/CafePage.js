import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { CafePageTop } from '../components/CafePageTop';
import { CafeNav, CafeNavLink } from '../components/CafeNav';
import { InDevelopment } from '../components/InDevelopment';
import { CafePageInfo } from '../components/CafePageInfo';

const query = gql`
  query Cafe($cafeId: ID!) {
    cafe(cafeId: $cafeId) {
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
        name
        pic
      }
    }
  }
`;

export const CafePage = ({ match }) => {
  const cafeId = match.params.id;
  const cafeUrl = `/cafe/${cafeId}`;
  const routes = generateRoutes(cafeUrl);

  const { data, loading, error } = useQuery(query, { variables: { cafeId } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { cafe } = data;

  if (!cafe) {
    return '404 Cafe not found';
  }
  return (
    <Container>
      <CafePageTop {...cafe} />
      <CafeNav>
        <CafeNavLink to={routes.about}>À propos</CafeNavLink>
        <CafeNavLink to={routes.members}>Members</CafeNavLink>
        <CafeNavLink to={routes.discution}>Discution</CafeNavLink>
        <CafeNavLink to={routes.rencontres}>Rencontres</CafeNavLink>
        <CafeNavLink to={routes.livres}>Livres</CafeNavLink>
      </CafeNav>

      <Switch>
        <Route exact path={routes.members} component={InDevelopment} />
        <Route exact path={routes.discution} component={InDevelopment} />
        <Route exact path={routes.rencontres} component={InDevelopment} />
        <Route exact path={routes.livres} component={InDevelopment} />
        <Route>
          <CafePageInfo cafe={cafe} />
        </Route>
      </Switch>
    </Container>
  );
};

const generateRoutes = cafeUrl =>
  ['about', 'members', 'discution', 'rencontres', 'livres', 'membres'].reduce(
    (routes, r) => ({ [r]: `${cafeUrl}/${r}`, ...routes }),
    {}
  );

const Container = styled.div`
  background-color: white;
  max-width: 720px;
  margin: 0 auto;
  padding: 1rem 2rem;
  min-height: 100vh;
`;
