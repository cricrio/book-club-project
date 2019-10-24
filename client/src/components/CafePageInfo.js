import React from 'react';
import { Typography } from '@rmwc/typography';

import { CafeMembers } from './CafeMembers';
import { CafeMeetupCard } from './CafeMeetupCard';
import { Chunk } from '../layout/Chunk';
import { Section } from '../layout/Section';
import { SectionTitle } from '../layout/SectionTitle';

export const CafePageInfo = ({
  cafe: { description, membersCount, members, meetups }
}) => {
  const pastMeetups =
    meetups.past &&
    meetups.past.map(m => (
      <Chunk key={m.id}>
        <CafeMeetupCard meetup={m} />
      </Chunk>
    ));
  return (
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
        <CafeMeetupCard meetup={meetups.next} />
      </Section>
      {pastMeetups && (
        <Section>
          <SectionTitle>Rencontres passées</SectionTitle>
          {pastMeetups}
        </Section>
      )}
    </div>
  );
};
