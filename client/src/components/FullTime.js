import React from 'react';
import { fullDateToString } from '../lib/dateUtils';

export function FullTime({ date }) {
  return <time dateTime={date}>{fullDateToString(date)}</time>;
}
