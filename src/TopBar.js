import React from "react";
import { SimpleTopAppBar, TopAppBarFixedAdjust } from "@rmwc/top-app-bar";

export const TopBar = ({ title }) => (
  <>
    <SimpleTopAppBar
      title={title}
      navigationIcon={{ onClick: () => console.log("Navigate") }}
      actionItems={[
        { onClick: () => console.log("Do Something"), use: "file_download" },
        { onClick: () => console.log("Do Something"), use: "print" },
        { onClick: () => console.log("Do Something"), use: "bookmark" }
      ]}
    />
    <TopAppBarFixedAdjust />
  </>
);
