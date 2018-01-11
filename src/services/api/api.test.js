import fetchMock from 'fetch-mock';
import api from './api';
import { NASA_API_URL } from './constants';

describe('NASA API', () => {
  test('search', done => {
    const query = 'pluto';
    const dummyFetchResponse = {
      collection: {
        version: '1.0',
        items: [],
        metadata: {},
        href: 'https://images-api.nasa.gov/search?q=pluto'
      }
    };

    const url = `${NASA_API_URL}/search?q=${query}&media_type=image`;
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

  test('asset', done => {
    const nasa_id = 'PIA11217';
    const dummyFetchResponse = {
      collection: {
        version: '1.0',
        items: [],
        metadata: {},
        href: 'https://images-api.nasa.gov/search?nasa_id=PIA11217'
      }
    };

    const url = `${NASA_API_URL}/search?nasa_id=${nasa_id}`;
    const config = {
      matcher: url,
      response: dummyFetchResponse,
      method: 'GET'
    };

    fetchMock.mock(config);

    api.asset(nasa_id).then(response => {
      expect(response.collection.href).toEqual(
        'https://images-api.nasa.gov/search?nasa_id=PIA11217'
      );
      done();
    });
  });
});
