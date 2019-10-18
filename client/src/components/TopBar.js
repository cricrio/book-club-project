import React from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";
import { Typography } from "@rmwc/typography";
import { UndecoratedLink } from "./UndecoratedLink";

export const TopBar = ({ title }) => (
  <>
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection>
          <TopAppBarTitle
            style={{ color: "var(--mdc-theme-text-primary-on-background)" }}
          >
            <UndecoratedLink to={`/`}>
              {" "}
              <Typography use="headline4">{title}</Typography>
            </UndecoratedLink>
          </TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust />
  </>
);
