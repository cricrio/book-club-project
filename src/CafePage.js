import React from "react";
import styled from "styled-components";

import { getCafes } from "./data";
import { CafePageTop } from "./CafePageTop";

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
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem;
`;
