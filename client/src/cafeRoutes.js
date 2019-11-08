import {}from 'ramda';
import { InDevelopment } from './components/InDevelopment';
import { CafePageInfo } from './components/CafePageInfo';

const routes = [
  {
    exact: true,
    path: '/',
    name: 'À propos',
    Component: CafePageInfo
  },
  {
    exact: true,
    path: 'members',
    name: 'Members',
    Component: InDevelopment
  },
  {
    exact: true,
    path: 'discution',
    name: 'Discution',
    Component: InDevelopment
  },
  {
    exact: true,
    path: 'rencontres',
    name: 'Rencontres',
    Component: InDevelopment
  },
  {
    exact: true,
    path: 'livres',
    name: 'Livres',
    Component: InDevelopment
  }
];

const transformPath = cafeId =>
  R.evolve({
    path: path => `/cafe/${cafeId}/${path}`
  });

export const computeCafeRoutes = cafeId => R.map(transformPath(cafeId));

export const getCafeRoutes = cafeId => computeCafeRoutes(cafeId)(routes);

const getRoute = name => R.find(R.propEq('name', name));

export const getCafeRoutesRessourceUrl = cafeId => name =>
  R.pipe(
    getCafeRoutes(cafeId),
    getRoute(name)
  );
