import React from 'react';

import { Switch, Route, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { CafePageTop } from '../components/CafePageTop';
import { CafeNav, CafeNavLink } from '../components/CafeNav';
import { InDevelopment } from '../components/InDevelopment';
import { CafePageInfo } from '../components/CafePageInfo';
import { useCafe } from '../hooks/useCafe';

const routes = [
  {
    exact: true,
    path: 'members',
    name: 'Members',
    Component: InDevelopment
  },
  {
    exact: true,
    path: 'discution',
    name: 'Discution',
    Component: InDevelopment
  },
  {
    exact: true,
    path: 'rencontres',
    name: 'Rencontres',
    Component: InDevelopment
  },
  {
    exact: true,
    path: 'livres',
    name: 'Livres',
    Component: InDevelopment
  }
];

export const CafePage = () => {
  const { data, loading, error } = useCafe();
  const { id } = useParams();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { cafe } = data;

  if (!cafe) {
    return '404 Cafe not found';
  }

  return (
    <Container>
      <CafePageTop cafe={cafe} />
      <CafeNav>
        <CafeNavLink to={`/cafe/${id}/`}>À propos</CafeNavLink>
        {routes.map(({ name, path }) => (
          <CafeNavLink to={`/cafe/${id}/${path}`}>{name}</CafeNavLink>
        ))}
      </CafeNav>

      <Switch>
        {routes.map(({ Component, path, exact }) => (
          <Route exact={exact} path={`/cafe/${id}/${path}`}>
            <Component cafe={cafe} />
          </Route>
        ))}
        <Route path={`/cafe/${id}/`}>
          <CafePageInfo cafe={cafe} />
        </Route>
      </Switch>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  max-width: 720px;
  margin: 0 auto;
  padding: 1rem 2rem;
  min-height: 100vh;
`;
