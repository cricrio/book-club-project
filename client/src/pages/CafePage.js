import React from 'react';

import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { CafePageTop } from '../components/CafePageTop';
import { CafeNav, CafeNavLink } from '../components/CafeNav';

import { useCafe } from '../hooks/useCafe';
import { useCafeRoutes } from '../hooks/useCafeRoutes';

export const CafePage = () => {
  const { cafe, loading, error } = useCafe();
  const routes = useCafeRoutes();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!cafe) {
    return '404 Cafe not found';
  }

  return (
    <Container>
      <CafePageTop cafe={cafe} />
      <CafeNav>
        {routes.map(({ name, path }) => (
          <CafeNavLink to={path}>{name}</CafeNavLink>
        ))}
      </CafeNav>

      <Switch>
        {routes.reverse().map(({ Component, path, exact }) => (
          <Route exact={exact} path={path}>
            <Component cafe={cafe} />
          </Route>
        ))}
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
