import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { CafePageTop } from "../components/CafePageTop";
import { CafeNav, CafeNavLink } from "../components/CafeNav";
import { InDevelopment } from "../components/InDevelopment";
import { CafePageInfo } from "../components/CafePageInfo";
import { CafePageQuery } from "../queries/CafePageQuery";

export const CafePage = ({ match }) => {
  const cafeId = match.params.id;
  const cafeUrl = `/cafe/${cafeId}`;
  const routes = generateRoutes(cafeUrl);

  return (
    <CafePageQuery cafeId={cafeId}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        const cafe = data.cafe[0];
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
              <Route component={() => <CafePageInfo cafe={cafe} />} />
            </Switch>
          </Container>
        );
      }}
    </CafePageQuery>
  );
};

const generateRoutes = cafeUrl =>
  ["about", "members", "discution", "rencontres", "livres", "membres"].reduce(
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
