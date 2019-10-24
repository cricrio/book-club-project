import React from 'react';
import styled from 'styled-components';
import { Typography } from '@rmwc/typography';

import { CafeImage } from './CafeImage';
import { Chunk } from '../layout/Chunk';
import { FullTime } from './FullTime';

export const CafePageTop = ({
  cafe: {
    name,
    pic,
    city,
    type,
    meetups: { next }
  }
}) => (
  <Container className="CafePageTop">
    <CafeAlignImage src={pic} />
    <div>
      <Chunk>
        <Typography use="headline5" tag="div">
          {name}
        </Typography>
        <Typography use="subtitle1">
          {type === 'LOCAL' ? `${city} - groupe ${type}` : `groupe ${type}`}
        </Typography>
      </Chunk>
      <Chunk>
        {next && (
          <Typography use="subtitle1">
            Prochaine rencontre le <FullTime date={next.date} />
          </Typography>
        )}
      </Chunk>
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  margin-top: 0;

  @media screen and (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CafeAlignImage = styled(CafeImage)`
  align-self: center;
  margin-right: 1rem;
`;
