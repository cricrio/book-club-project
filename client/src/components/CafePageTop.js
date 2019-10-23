import React from 'react';
import styled from 'styled-components';
import { Typography } from '@rmwc/typography';

import { CafeImage } from './CafeImage';
import { Chunk } from '../layout/Chunk';

export const CafePageTop = ({ name, pic, city, type }) => (
  <Container className="CafePageTop">
    <CafeAlignImage src={pic} />
    <div>
      <Chunk>
        <Typography use="headline5" tag="div">
          {name}
        </Typography>
        <Typography use="subtitle1">
          {city} - groupe {type}
        </Typography>
      </Chunk>
      <Chunk>
        <Typography use="subtitle1">
          Prochaine rencontre le lun. 22 juil., 9h00
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

const CafeName = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const CafeAlignImage = styled(CafeImage)`
  align-self: center;
  margin-right: 1rem;
`;
