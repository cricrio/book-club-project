import React from "react";
import { Card, CardPrimaryAction } from "@rmwc/card";
import { Chip, ChipSet } from "@rmwc/chip";

import { Typography } from "@rmwc/typography";
import { Avatar } from "@rmwc/avatar";

import { Time } from "./Time";
import { BookInfo } from "./BookInfo";

export const PostCard = ({ blog, content, date, title }) => (
  <Card style={{ marginBottom: "1rem", padding: "0 2rem 1rem" }}>
    <Typography use="headline4" tag="h2">
      {title}
    </Typography>
    <div style={{ margin: "-2.5rem 0 1rem" }}>
      <Avatar
        src={blog.picture}
        size="xlarge"
        name="Natalia Alianovna Romanova"
        style={{ marginRight: "1rem" }}
      />

      <Typography use="headline6" tag="span" theme="textSecondaryOnBackground">
        {blog.owner} - <Time date={date} />
        <Typography
          use="headline2"
          tag="span"
          theme="textSecondaryOnBackground"
        >
          {" "}
        </Typography>
      </Typography>
    </div>
    <div>
      {/* <div>
            <div>
            Can be improved with css
    */}
      <div>
        <BookInfo
          style={{
            display: "inline-box",
            float: "left",
            marginRight: "1rem"
          }}
        />
        <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
          {content}
        </Typography>
      </div>
    </div>
    <ChipSet>
      <Chip label="romance" />
      <Chip label="fantasy" />
    </ChipSet>
  </Card>
);
