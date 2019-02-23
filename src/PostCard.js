import React from "react";
import { Card, CardPrimaryAction, CardMedia, CardActions } from "@rmwc/card";
import { ListDivider } from "@rmwc/list";

import { Typography } from "@rmwc/typography";

import "@material/card/dist/mdc.card.css";
import "@material/list/dist/mdc.list.css";

export const PostCard = ({ content, date, title }) => (
  <Card style={{ width: "16rem", marginRight: "2rem", flex: "none" }}>
    <CardPrimaryAction>
      <Typography
        use="body1"
        tag="div"
        theme="textSecondaryOnBackground"
        style={{ padding: "1rem" }}
      >
        {content}
      </Typography>
    </CardPrimaryAction>
    <ListDivider />
    <CardActions>
      <div>
        <Typography use="headline6" tag="div">
          {title}
        </Typography>
        <Typography use="subtitle2" tag="div">
          {date.toLocaleDateString()}
        </Typography>
      </div>
    </CardActions>
  </Card>
);
