import fetchMock from 'fetch-mock';
import fetchJson from './';

describe('fetch json', () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  describe('success status', () => {
    test('performs a fetch', done => {
      const dummyFetchResponse = {
        response: 'ok'
      };

      const url = 'an_url';
      const config = {
        matcher: url,
        response: dummyFetchResponse,
        method: 'GET'
      };

      fetchMock.mock(config);

      fetchJson(url).then(({ response }) => {
        expect(response).toEqual('ok');
        done();
      });
    });
  });

  describe('422 status', () => {
    test('performs a fetch caching errors', done => {
      const dummyFetchResponse = {
        an: 'error'
      };

      const url = 'an_url';
      const config = {
        matcher: url,
        response: {
          body: dummyFetchResponse,
          status: 422
        },
        method: 'GET'
      };

      fetchMock.mock(config);

      fetchJson(url).catch(error => {
        expect(error).toEqual(dummyFetchResponse);
        done();
      });
    });
  });

  describe('500 status', () => {
    test('performs a fetch caching errors', done => {
      const url = 'an_url';
      const config = {
        matcher: url,
        response: {
          status: 500
        },
        method: 'GET'
      };

      fetchMock.mock(config);

      fetchJson(url).catch(error => {
        expect(error).toEqual(new Error('Internal Server Error'));
        done();
      });
    });
  });
});
