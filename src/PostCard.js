import React from "react";
import { Card, CardPrimaryAction } from "@rmwc/card";
import { Chip, ChipSet } from "@rmwc/chip";

import { Typography } from "@rmwc/typography";
import { Avatar } from "@rmwc/avatar";

export const PostCard = ({ blog, content, date, title }) => (
  <Card style={{ marginBottom: "1rem", padding: "0 2rem 1rem" }}>
    <Typography use="headline4" tag="h2">
      {title}
    </Typography>
    <div style={{ margin: "-1rem 0 1rem" }}>
      <Avatar
        src={blog.picture}
        size="xlarge"
        name="Natalia Alianovna Romanova"
        style={{ marginRight: "1rem" }}
      />

      <Typography use="subtitle1" tag="span" theme="textSecondaryOnBackground">
        {blog.owner} (il y a 4 heures)
      </Typography>
    </div>
    <CardPrimaryAction>
      <Typography
        use="body1"
        tag="div"
        theme="textSecondaryOnBackground"
        style={{}}
      >
        {content}
      </Typography>
    </CardPrimaryAction>
    <ChipSet>
      <Chip label="romance" />
      <Chip label="fantasy" />
    </ChipSet>
  </Card>
);
