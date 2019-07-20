import React from "react";

import { getCafes } from "./data";
import { CafePageTop } from "./CafePageTop";

export const CafePage = ({ match }) => {
  const cafe = getCafes()[match.params.id];
  if (!cafe) {
    return null;
  }
  const { description } = cafe;
  return (
    <div
      style={{
        backgroundColor: "white",
        maxWidth: "720px",
        margin: "0 auto",
        padding: "2rem"
      }}
    >
      <CafePageTop {...cafe} />
      <h2>À propos</h2>
      <p>{description}</p>
    </div>
  );
};
