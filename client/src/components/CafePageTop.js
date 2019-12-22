import React from 'react';
import styled from 'styled-components';
import { Typography } from '@rmwc/typography';

import { CafeImage } from './CafeImage';
import { Chunk } from '../layout/Chunk';

export const CafePageTop = ({
  cafe: { name, pic, city, type, memberCount }
}) => (
  <Container className="CafePageTop">
    <CafeAlignImage src={pic} />
    <div>
      <Chunk>
        <Typography use="headline5" tag="div">
          {name}
        </Typography>
        <Typography use="subtitle1" tag="div">
          {type === 'LOCAL' ? `${city} - groupe ${type}` : `groupe ${type}`}
        </Typography>
        <Typography use="subtitle1" tag="div">
          {memberCount} membres
        </Typography>
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
