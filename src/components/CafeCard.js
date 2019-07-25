import React from "react";
import { Typography } from "@rmwc/typography";
import { UndecoratedLink } from "./UndecoratedLink";
import { CafeButton } from "./CafeButton";
import styled from "styled-components";

// TODO remove rmwc depency

export const CafeCard = ({ name, description, city, image, isMember, id }) => (
  <Card className="cafeInfo">
    <CafeImage src={image} alt={`de ${name}`} />
    <CafeData>
      <CafeName tag="h2" use="headline6">
        <UndecoratedLink to={`/cafe/${id}`}> {name}</UndecoratedLink>
      </CafeName>
      <CafeCity
        tag="h2"
        use="headline6"
        theme="textSecondaryOnBackground"
        style={{ marginTop: "-0.5rem" }}
      >
        {city}
      </CafeCity>
      <CafeDescription tag="p" theme="textSecondaryOnBackground" maxline={4}>
        {description}
      </CafeDescription>
      <CafeCardAction>
        <CafeAction>
          <b>6</b> membres
        </CafeAction>
        <CafeAction>
          <CafeButton isMember={isMember} />
        </CafeAction>
      </CafeCardAction>
    </CafeData>
  </Card>
);

const Card = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  background-color: white;
  align-items: center;
  width: 300px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;

  @media screen and (min-width: 720px) {
    width: 600px;
    flex-direction: row;
  }
`;

const CafeImage = styled.img`
  display: block;
  height: 200px;
  width: 200px;
  margin: 1rem;
`;

const CafeData = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  vertical-align: top;
  margin: 0;
  height: 200px;
`;

const CafeCity = styled(Typography)`
  padding: 0 1rem;
  margin: 0;
  margin-top: -0.5rem;
`;
const CafeName = styled(Typography)`
  padding: 0 1rem;
  margin: 0;
`;

const CafeDescription = styled(Typography)`
  box-sizing: border-box;
  flex-basis: 68%;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1rem;
  max-height: ${props => props.maxline + 1 + "rem"};
  padding: 1rem 1rem;
  margin: 0;
`;

const CafeCardAction = styled.div`
  display: flex;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-around;
`;

const CafeAction = styled.div`
  padding: 1rem 0;
`;
