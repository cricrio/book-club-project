import React from 'react';
import { CafeMembers } from './CafeMembers';
import { CafeMeetupCard } from './CafeMeetupCard';
import { Section } from '../layout/Section';
import { SectionTitle } from '../layout/SectionTitle';

export const CafePageInfo = ({
  cafe: { description, membersCount, members, meetups }
}) => (
  <div>
    <Section>
      <SectionTitle>À propos</SectionTitle>
      <p>{description}</p>
    </Section>
    <Section>
      <SectionTitle>Membres ({membersCount})</SectionTitle>
      <CafeMembers members={members} />
    </Section>
    <Section>
      <SectionTitle>Rencontres à venir</SectionTitle>
      <CafeMeetupCard meetup={meetups[0]} />
    </Section>
    <Section>
      <SectionTitle>Rencontres passées</SectionTitle>
    </Section>
  </div>
);
