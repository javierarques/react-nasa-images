import fetchJson from '../../utils/fetchJson';
import { NASA_API_URL } from './constants';

const api = {
  search: query => {
    return fetchJson(`${NASA_API_URL}/search?q=${query}&media_type=image`);
  },
  asset: id => fetchJson(`${NASA_API_URL}/search?nasa_id=${id}`)
};

export default api;
