import React from 'react';
import { Typography } from '@rmwc/typography';
import styled from 'styled-components';

import { UndecoratedLink } from './UndecoratedLink';
import { FullTime } from './FullTime';
import { Card } from '../layout/Card';
import { Chunk } from '../layout/Chunk';

export const CafeMeetupCard = ({
  meetup: { date: timestamp, localisation, name, participantsCount }
}) => {
  const date = new Date(timestamp);
  return (
    <Container>
      <div>
        <Chunk>
          <Typography use="body1">
            <FullTime date={date} />
          </Typography>
        </Chunk>
        <Chunk>
          <Chunk>
            <UndecoratedLink style={{ fontWeight: 'bold' }}>
              <Typography use="headline6">{name}</Typography>
            </UndecoratedLink>
          </Chunk>
          <Chunk>
            <Typography use="body1">{localisation}</Typography>
          </Chunk>
        </Chunk>
      </div>
      <div style={{ alignSelf: 'center', textAlign: 'center' }}>
        <Chunk>
          <Typography use="body1">{participantsCount} participants</Typography>
        </Chunk>
      </div>
    </Container>
  );
};

const Container = styled(Card)`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 0 1rem;
`;
