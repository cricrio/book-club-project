import formatDistanceWithOptions from "date-fns/fp/formatDistanceWithOptions";
import formatWithOptions from "date-fns/fp/formatWithOptions";
import fr from "date-fns/locale/fr";

export const formatDistanceFr = formatDistanceWithOptions({ locale: fr });

export const formatDistanceFromNowFr = formatDistanceFr(new Date());

const formatFr = formatWithOptions({ locale: fr });

export const dateToString = formatFr("d MMMM");

export const fullDateToString = formatFr("PPPp");
