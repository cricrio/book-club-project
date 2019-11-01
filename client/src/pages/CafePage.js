import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { CafePageTop } from '../components/CafePageTop';
import { CafeNav, CafeNavLink } from '../components/CafeNav';
import { PageContainer } from '../layout/PageContainer';
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
    <PageContainer>
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
    </PageContainer>
  );
};
