import React from "react";
import { CafeMembers } from "./CafeMembers";
import { CafeMeetupCard } from "./CafeMeetupCard";
import { Section } from "../layout/Section";
import { SectionTitle } from "../layout/SectionTitle";

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
    <Section>
      <SectionTitle>À propos</SectionTitle>
      <p>{description}</p>
    </Section>
    <Section>
      <SectionTitle>Membres ({memberTotal})</SectionTitle>
      <CafeMembers members={members} />
    </Section>
    <Section>
      <SectionTitle>Rencontres à venir</SectionTitle>
      <CafeMeetupCard />
    </Section>
    <Section>
      <SectionTitle>Rencontres passées</SectionTitle>
    </Section>
  </div>
);
