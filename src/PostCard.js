import React from "react";
import { Card, CardPrimaryAction } from "@rmwc/card";
import { ListDivider } from "@rmwc/list";

import { Typography } from "@rmwc/typography";

export const PostCard = ({ content, date, title }) => (
  <Card style={{ marginBottom: "1rem" }}>
    <CardPrimaryAction style={{ padding: "0 1rem 1rem 1rem" }}>
      <Typography use="headline6" tag="h2">
        {title}
      </Typography>
      <Typography
        use="subtitle2"
        tag="div"
        theme="textSecondaryOnBackground"
        style={{ marginTop: "-1rem" }}
      >
        {date.toLocaleDateString()}
      </Typography>

      <ListDivider />
      <Typography
        use="body1"
        tag="div"
        theme="textSecondaryOnBackground"
        style={{ padding: "1rem" }}
      >
        {content}
      </Typography>
    </CardPrimaryAction>
  </Card>
);
