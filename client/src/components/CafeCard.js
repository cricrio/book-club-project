import React from 'react';
import styled from 'styled-components';

import { Typography } from '@rmwc/typography';
import { UndecoratedLink } from './UndecoratedLink';
import { Card, CardMedia } from '@rmwc/card';

export const CafeCard = ({ name, description, city, pic, id }) => (
  <Container className="cafeInfo">
    <CardMedia
      sixteenByNine
      style={{
        backgroundImage: `url(${pic})`
      }}
    />
    <div style={{ padding: '1rem' }}>
      <HeadLine to={`/cafe/${id}`}>
        <Typography tag="h2" use="headline6">
          {name}
        </Typography>
        <Typography tag="h2" use="headline6" theme="textSecondaryOnBackground">
          {city}
        </Typography>
      </HeadLine>
      <CafeDescription tag="p" maxline={6}>
        {description}
      </CafeDescription>
    </div>
  </Container>
);

const Container = styled(Card)`
  margin-bottom: 1rem;
  background-color: white;
  width: 21rem;
  margin: 1.5rem;
`;

const HeadLine = styled(UndecoratedLink)`
  display: flex;
  justify-content: space-between;
`;
const CafeDescription = styled(Typography)`
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 125px;
`;
