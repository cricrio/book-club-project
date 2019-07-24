import React from "react";
import { CafeMembers } from "./CafeMembers";

const members = [
  {
    id: 1,
    username: "Mario F.",
    pic: "https://rmwc.io/images/avatars/ironman.png"
  },
  {
    id: 2,
    username: "Christopher F.",
    pic: "https://rmwc.io/images/avatars/ironman.png"
  },
  {
    id: 3,
    username: "Marie Thérèse F.",
    pic: "https://rmwc.io/images/avatars/ironman.png"
  },
  {
    id: 1,
    username: "Mario F.",
    pic: "https://rmwc.io/images/avatars/ironman.png"
  },
  {
    id: 2,
    username: "Christopher F.",
    pic: "https://rmwc.io/images/avatars/ironman.png"
  },
  {
    id: 3,
    username: "Marie Thérèse F.",
    pic: "https://rmwc.io/images/avatars/ironman.png"
  },
  {
    id: 1,
    username: "Mario F.",
    pic: "https://rmwc.io/images/avatars/ironman.png"
  },
  {
    id: 2,
    username: "Christopher F.",
    pic: "https://rmwc.io/images/avatars/ironman.png"
  },
  {
    id: 3,
    username: "Marie Thérèse F.",
    pic: "https://rmwc.io/images/avatars/ironman.png"
  }
];

export const CafePageInfo = ({ cafe: { description, memberTotal } }) => (
  <div>
    <h2>À propos</h2>
    <p>{description}</p>
    <h2>Membres ({memberTotal})</h2>
    <CafeMembers members={members} />
  </div>
);
