import React from "react";
import { Typography } from "@rmwc/typography";
import {UnderatedLink} from "./UndecoratedLink";
import styled from "styled-components";

// TODO this component is not responcive need to improve for mobile use.

export const CafeInfo = ({ name, description, city, image, isMember,id }) => (
  <CafeCard className="cafeInfo">
    <CafeImage src={image} alt={`de ${name}`} />
    <CafeData>
      <CafeName tag="h2" use="headline6">
       <UnderatedLink to={`/cafe/${id}`}> {name}</UnderatedLink>
      </CafeName>
      <CafeName
        tag="h2"
        use="headline6"
        theme="textSecondaryOnBackground"
        style={{ marginTop: "-0.5rem" }}
      >
        {city}
      </CafeName>
      <CafeDescription tag="p" theme="textSecondaryOnBackground" maxline={4}>
        {description}
      </CafeDescription>
      <CafeCardAction>
        <CafeAction>6 membres</CafeAction>
        <CafeAction>
          <JoinButton isMember={isMember}>
            {isMember ? "Rejoindre" : "Quitter"}
          </JoinButton>
        </CafeAction>
      </CafeCardAction>
    </CafeData>
  </CafeCard>
);

const JoinButton = styled.button`
  background-color: inherit;
  padding: 0.25rem;
  border: 2px solid ${({ isMember }) => (isMember ? "royalblue" : "red")};
  border-radius: 4px;
`;

const CafeCard = styled.section`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  background-color: white;
  width: 600px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`;

const CafeImage = styled.img`
  display: block;
  height: 200px;
  width: 200px;
  margin: 0;
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
