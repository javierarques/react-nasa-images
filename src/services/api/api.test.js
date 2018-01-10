import fetchMock from 'fetch-mock';
import api from './api';
import { NASA_API_URL } from './constants';

describe('NASA API', () => {
  test('search', done => {
    const query = 'pluto';
    const dummyFetchResponse = {
      collection: {
        href: 'https://images-api.nasa.gov/search?q=pluto',
        items: []
      }
    };

    const url = `${NASA_API_URL}/search?q=${query}`;
    const config = {
      matcher: url,
      response: dummyFetchResponse,
      method: 'GET'
    };

    fetchMock.mock(config);

    api.search(query).then(response => {
      expect(response.collection.href).toEqual(
        'https://images-api.nasa.gov/search?q=pluto'
      );
      done();
    });
  });
});
