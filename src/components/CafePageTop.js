import React from "react";
import styled from "styled-components";

import { CafeImage } from "./CafeImage";
import { CafeButton } from "./CafeButton";
import { Chunk } from "../layout/Chunk";
export const CafePageTop = ({
  name,
  image,
  city,
  cafeType,
  postTotal,
  meetupTotal,
  memberTotal,
  isMember
}) => (
  <Container className="CafePageTop">
    <CafeAlignImage src={image} />
    <div>
      <Chunk>
        <CafeName style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          {name}
        </CafeName>
        <div>{city}</div>
      </Chunk>
      <Chunk>
        <div>
          <b>{memberTotal} </b> membres - groupe <b>{cafeType}</b>
        </div>
        <div>
          <b>{meetupTotal} </b> rencontres - <b> {postTotal || 5} </b> posts
        </div>
      </Chunk>
      <Chunk>
        Prochaine rencontre le <b>lun. 22 juil., 9h00</b>
      </Chunk>
      <CafeButton isMember={isMember} />
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  margin-top: 0;

  @media screen and (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CafeName = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const CafeAlignImage = styled(CafeImage)`
  align-self: center;
  margin-right: 1rem;
`;
