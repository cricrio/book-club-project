import React from "react";
import styled from "styled-components";

import { fullDateToString } from "../lib/dateUtils";
import { UndecoratedLink } from "./UndecoratedLink";
import { CafeButton } from "./CafeButton";
import { Card } from "../layout/Card";
import { Chunk } from "../layout/Chunk";

export const CafeMeetupCard = ({
  date,
  place,
  title,
  participantTolat: meetup
}) => (
  <Container>
    <div>
      <Chunk>
        <time dateTime={new Date()}>{fullDateToString(new Date())}</time>
      </Chunk>
      <Chunk>
        <UndecoratedLink style={{ fontWeight: "bold" }}>
          #Craft 2 - Problématiques des jeunes artisans créateurs
        </UndecoratedLink>
        <Chunk>Place royale</Chunk>
      </Chunk>
    </div>
    <div style={{ alignSelf: "center", textAlign: "center" }}>
      <div>6 participants</div>
      <CafeButton />
    </div>
  </Container>
);

const Container = styled(Card)`
  display: flex;
`;
