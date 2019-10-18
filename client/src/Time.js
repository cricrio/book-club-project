import React from "react";

import { dateToString, fullDateToString } from "./lib/dateUtils";

export const Time = ({ date }) => (
  <time dateTime={date} title={fullDateToString(date)}>
    {dateToString(date)}
  </time>
);
