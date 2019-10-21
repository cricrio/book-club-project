import React from 'react';
import styled from 'styled-components';

import { fullDateToString } from '../lib/dateUtils';
import { UndecoratedLink } from './UndecoratedLink';
import { CafeButton } from './CafeButton';
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
          <time dateTime={date}>{fullDateToString(date)}</time>
        </Chunk>
        <Chunk>
          <Chunk>
            <UndecoratedLink style={{ fontWeight: 'bold' }}>
              {name}
            </UndecoratedLink>
          </Chunk>
          <Chunk>{localisation}</Chunk>
        </Chunk>
      </div>
      <div style={{ alignSelf: 'center', textAlign: 'center' }}>
        <Chunk>{participantsCount} participants</Chunk>
        <CafeButton />
      </div>
    </Container>
  );
};

const Container = styled(Card)`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 0 1rem;
`;
