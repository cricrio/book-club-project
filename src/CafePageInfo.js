import React from "react";

export const CafePageInfo = ({ cafe: { description } }) => (
  <div>
    <h2>À propos</h2>
    <p>{description}</p>
  </div>
);
