import React from "react";
import styled from "styled-components";

import { Typography } from "@rmwc/typography";
import { UndecoratedLink } from "./UndecoratedLink";
import { CafeButton } from "./CafeButton";
import { Card } from "../layout/Card";
import { Chunk } from "../layout/Chunk";

// TODO remove rmwc depency

export const CafeCard = ({ name, description, city, pic, isMember, id }) => (
  <Container className="cafeInfo">
    <CafeImage src={pic} alt={`de ${name}`} />
    <Chunk style={{ width: "85%" }}>
      <Chunk>
        <Typography tag="h2" use="headline6">
          <UndecoratedLink to={`/cafe/${id}`}> {name}</UndecoratedLink>
        </Typography>
        <Typography tag="h2" use="headline6" theme="textSecondaryOnBackground">
          {city}
        </Typography>
      </Chunk>
      <Chunk>
        <CafeDescription tag="p" theme="textSecondaryOnBackground" maxline={4}>
          {description}
        </CafeDescription>
      </Chunk>
    </Chunk>
    <CafeCardAction>
      <Chunk>
        <b>6</b> membres
      </Chunk>
      <Chunk>
        <CafeButton isMember={isMember} />
      </Chunk>
    </CafeCardAction>
  </Container>
);

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  background-color: white;
  align-items: center;
  width: 300px;

  @media screen and (min-width: 720px) {
    width: 800px;
    flex-direction: row;
  }
`;

const CafeImage = styled.img`
  display: block;
  height: 200px;
  width: 200px;
  margin: 1rem;
`;

const CafeDescription = styled(Typography)`
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1rem;
  max-height: ${props => props.maxline + "rem"};
`;

const CafeCardAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  padding: 1rem;

  @media screen and (min-width: 720px) {
    flex-direction: column;
    width: 350px;
    padding: 2rem;
  }
`;
