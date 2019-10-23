import React from 'react';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust
} from '@rmwc/top-app-bar';
import styled from 'styled-components';

import { UndecoratedLink } from './UndecoratedLink';
import { Logo } from './Logo';

const StyledTopAppBar = styled(TopAppBar)`
  border-bottom: 1px solid rgb(204, 215, 230);
  background-color: white;
`;

const StyledTopAppBarRow = styled(TopAppBarRow)`
  background-color: white;
`;

export const TopBar = () => (
  <>
    <StyledTopAppBar>
      <StyledTopAppBarRow>
        <TopAppBarSection>
          <TopAppBarTitle>
            <UndecoratedLink to={`/`}>
              <Logo />
            </UndecoratedLink>
          </TopAppBarTitle>
        </TopAppBarSection>
      </StyledTopAppBarRow>
    </StyledTopAppBar>
    <TopAppBarFixedAdjust />
  </>
);
