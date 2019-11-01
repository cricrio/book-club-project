import React from 'react';
import { Typography } from '@rmwc/typography';
import styled from 'styled-components';

import { UndecoratedLink } from '../components/UndecoratedLink';

export function SectionTitle({ to, children }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography use="headline6">{children}</Typography>
      <Typography use="body2" theme="textSecondaryOnBackground">
        {to && <StyledLink to={to}> Voir tout</StyledLink>}
      </Typography>
    </div>
  );
}

const StyledLink = styled(UndecoratedLink)`
  :hover {
    text-decoration: underline;
  }
`;
