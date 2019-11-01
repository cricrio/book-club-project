import { useParams } from 'react-router-dom';
import { getCafeRoutes } from '../cafeRoutes';

export function useCafeRoutes() {
  const { id } = useParams();
  return getCafeRoutes(id);
}
