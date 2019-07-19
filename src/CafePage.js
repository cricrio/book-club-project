import React from "react";

import styled from "styled-components";
import { getCafes } from "./data";

export const CafePage = ({ match }) => {
  const cafe = getCafes()[match.params.id];
  if (!cafe) {
    return null;
  }
  const { name, city, image, description } = cafe;
  return (
    <div
      style={{
        backgroundColor: "white",
        maxWidth: "720px",
        margin: "0 auto",
        padding: "2rem"
      }}
    >
      <CafePageTop>
        <CafeImage src={image} />
        <div style={{ marginLeft: "2rem" }}>
          <h1>{name}</h1>
          <h2 style={{ marginTop: "-1rem" }}>{city}</h2>
          <div>56 membres - Groupe local</div>
          <div>445 posts</div>
          <div style={{ marginTop: "1rem" }}>
            Prochaine rencontre le 31 juillet 2019
          </div>
        </div>
      </CafePageTop>
      <h2>À propos</h2>
      <p>{description}</p>
    </div>
  );
};

const CafePageTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
`;

const CafeImage = styled.img`
  display: block;
  height: 200px;
  width: 200px;
  margin: 0;
`;
