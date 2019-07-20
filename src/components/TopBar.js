import React from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";
import { Typography } from "@rmwc/typography";
import {UnderatedLink} from './UndecoratedLink';

export const TopBar = ({ title }) => (
  <>
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection>
          <TopAppBarTitle
            style={{ color: "var(--mdc-theme-text-primary-on-background)" }}
          >
          <UnderatedLink to={`/`}>  <Typography use="headline4">{title}</Typography></UnderatedLink>
          </TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust />
  </>
);
