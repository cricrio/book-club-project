import React from "react";
import { Typography } from "@rmwc/typography";
const bookUrl =
  "https://cdn1.booknode.com/book_cover/1125/mod11/un-palais-de-cendres-et-de-ruines-1124724-132-216.jpg";

export const BookInfo = ({ style }) => (
  <div style={style}>
    <Typography use="body1" tag="div">
      A Christmas Carol
    </Typography>
    <Typography use="body1" tag="div">
      Charles Dickens
    </Typography>
    <img src={bookUrl} />
  </div>
);
