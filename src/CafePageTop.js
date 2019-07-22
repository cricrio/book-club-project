import React from "react";
import styled from "styled-components";

import { CafeImage } from "./CafeImage";
import { CafeButton } from "./CafeButton";
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
  <Container>
    <CafeAlignImage src={image} />
    <div style={{ marginTop: 0 }}>
      <CafeName>{name}</CafeName>
      <CafeCity>{city}</CafeCity>
      <div>
        <b>{memberTotal} </b> membres - groupe <b>{cafeType}</b>
      </div>
      <div>
        <b>{meetupTotal} </b> rencontres - <b> {postTotal || 5} </b> posts
      </div>
      <CafeNextMeetup>
        Prochaine rencontre le <b>lun. 22 juil., 9h00</b>
      </CafeNextMeetup>
      <StyledCafeButton isMember={isMember} />
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

const CafeAlignImage = styled(CafeImage)`
  align-self: center;
  @media screen and (min-width: 720px) {
    align-self: flex-end;
  }
`;

const CafeName = styled.h1`
  margin-top: 0rem;
`;
const CafeCity = styled.h2`
  margin-top: -1rem;
`;
const CafeNextMeetup = styled.div`
  margin-top: 1rem;
`;

const StyledCafeButton = styled(CafeButton)`
  margin-top: 1rem;
`;
