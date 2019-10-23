import React from 'react';
import { CafeMembers } from './CafeMembers';
import { CafeMeetupCard } from './CafeMeetupCard';
import { Section } from '../layout/Section';
import { SectionTitle } from '../layout/SectionTitle';
import { Typography } from '@rmwc/typography';

export const CafePageInfo = ({
  cafe: { description, membersCount, members, meetups }
}) => (
  <div>
    <Section>
      <SectionTitle>À propos</SectionTitle>
      <Typography use="body1" tag="div">
        {description}
      </Typography>
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
