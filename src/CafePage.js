import React from "react";
import { Switch, Route } from "react-router-dom";

import { getCafes } from "./data";
import { CafePageTop } from "./CafePageTop";
import { CafeNav, CafeNavLink } from "./CafeNav";
import { InDevelopmentPage } from "./InDevelopmentPage";
import { CafePageInfo } from "./CafePageInfo";

export const CafePage = ({ match }) => {
  const cafeId = match.params.id;
  const cafe = getCafes()[cafeId];
  if (!cafe) {
    return null;
  }
  const routes = {
    apropos: `/cafe/${cafeId}/a-propos`,
    discution: `/cafe/${cafeId}/discution`,
    rencontres: `/cafe/${cafeId}/rencontres`,
    livres: `/cafe/${cafeId}/livres`
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        maxWidth: "720px",
        margin: "0 auto",
        padding: "1rem 2rem",
        minHeight: "100vh"
      }}
    >
      <CafePageTop {...cafe} />
      <CafeNav>
        <CafeNavLink to={routes.apropos}>À propos</CafeNavLink>
        <CafeNavLink to={routes.discution}>Discution</CafeNavLink>
        <CafeNavLink to={routes.rencontres}>Rencontres</CafeNavLink>
        <CafeNavLink to={routes.livres}>Livres</CafeNavLink>
      </CafeNav>

      <Switch>
        <Route
          path={routes.apropos}
          component={() => <CafePageInfo cafe={cafe} />}
        />
        <Route path={routes.discution} component={InDevelopmentPage} />
        <Route path={routes.rencontre} component={InDevelopmentPage} />
        <Route path={routes.livres} component={InDevelopmentPage} />
      </Switch>
    </div>
  );
};
