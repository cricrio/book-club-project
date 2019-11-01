import React from 'react';

import { dateToString, fullDateToString } from '../utils/dateUtils';

export const Time = ({ date }) => (
  <time dateTime={date} title={fullDateToString(date)}>
    {dateToString(date)}
  </time>
);
