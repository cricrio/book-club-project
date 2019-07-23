import React from "react";
import styled from "styled-components";

import { getCafes } from "../data";
import { CafePageTop } from "../components/CafePageTop";
import { Tab, Tabs } from "../components/tabs";

export const CafePage = ({ match }) => {
  const cafe = getCafes()[match.params.id];
  if (!cafe) {
    return null;
  }
  const { description } = cafe;
  return (
    <Container>
      <CafePageTop {...cafe} />
      <h2>À propos</h2>
      <p>{description}</p>
      <Tabs>
        <Tab title={"discution"}>This is discution tab</Tab>
        <Tab title={"rencontre"}>This is rencontre tab</Tab>
      </Tabs>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem;
`;
