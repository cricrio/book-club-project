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
    <div>
      <CafeName>{name}</CafeName>
      <CafeCity>{city}</CafeCity>
      <div>
        {memberTotal} membres - groupe {cafeType}
      </div>
      <div>
        {meetupTotal} rencontres - {postTotal} posts
      </div>
      <CafeNextMeetup>Prochaine rencontre le 31 juillet 2019</CafeNextMeetup>
      <StyledCafeButton isMember={isMember} />
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;

  @media screen and (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CafeAlignImage = styled(CafeImage)`
  align-self: flex-end;
`;

const CafeName = styled.h1`
  margin-top: 1rem;
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
