import fetchJson from '../../utils/fetchJson';
import { NASA_API_URL } from './constants';

const api = {
  search: query =>
    fetchJson(`${NASA_API_URL}/search?q=${query}&media_type=image`)
};

export default api;
