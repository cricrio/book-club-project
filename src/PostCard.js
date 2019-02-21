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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        feugiat volutpat ultrices. In pharetra ultricies leo, eu molestie sem
        luctus non. Etiam sed cursus ex, vitae molestie nisl. Nam hendrerit
        dapibus ex eget lobortis. Sed urna neque, consequat vitae ultricies sit
        amet, elementum vitae augue.
      </Typography>
    </CardPrimaryAction>
    <ListDivider />
    <CardActions>
      <div>
        <Typography use="headline6" tag="div">
          {title}
        </Typography>
        <Typography use="subtitle2" tag="div">
          25/11/2018
        </Typography>
      </div>
    </CardActions>
  </Card>
);
