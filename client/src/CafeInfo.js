import React from "react";
import { Typography } from "@rmwc/typography";
import { Card } from "@rmwc/card";
import { Icon } from "@rmwc/icon";
import styled from "styled-components";

// export const CafeInfo001 = ({ name, description, city, image }) => (
//   <CafeCard>
//     <CafeImage src={image} />
//     <CafeData />
//   </CafeCard>
// );

const CafeCard = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  background-color: white;
  min-width: 200px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const CafeImage = styled.img`
  display: block;
  height: 200px;
  width: 200px;
  margin: 0;
`;

const CafeData = styled.div`
  position: relative;
  flex-basis: "68%";
  height: 100%;
  flex-direction: column;
  vertical-align: top;
  margin: 0;
  height: 200px;
`;

const CafeName = styled(Typography)`
  padding: 0 1rem;
  margin: 0;
`;

const CafeDescription = styled(Typography)`
  flex-basis: 68%;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1rem;
  max-height: ${props => props.maxLine}rem;
  padding: 1rem 1rem;
  margin: 0;
`;

const CafeCardAction = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-around;
`;

const CafeAction = styled.div`
  padding: 1rem 0;
`;

export const CafeInfo = ({ name, description, city, image }) => (
  <CafeCard>
    <CafeImage src={image} alt={`de ${name}`} />
    <CafeData>
      <CafeName tag="h2" use="headline6">
        {name}
      </CafeName>
      <CafeName
        tag="h2"
        use="headline6"
        theme="textSecondaryOnBackground"
        style={{ marginTop: "-0.5rem" }}
      >
        {city}
      </CafeName>
      <CafeDescription tag="p" theme="textSecondaryOnBackground" maxLine={4}>
        {description}
      </CafeDescription>
      <CafeCardAction>
        <CafeAction>6 membres</CafeAction>
        <CafeAction>Rejoindre</CafeAction>
      </CafeCardAction>
    </CafeData>
  </CafeCard>
);
