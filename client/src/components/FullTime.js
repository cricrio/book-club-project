import React from 'react';
import { fullDateToString } from '../utils/dateUtils';

export function FullTime({ date }) {
  return <time dateTime={date}>{fullDateToString(date)}</time>;
}
