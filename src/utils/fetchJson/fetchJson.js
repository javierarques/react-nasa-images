import 'whatwg-fetch';
import { camelizeKeys } from 'humps';

const fetchJson = (url, options = {}) => {
  const defaultOptions = {
    timeout: 2000,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  const fetchOptions = { ...defaultOptions, ...options };

  const checkResponse = response =>
    response.json().then(
      json => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(json);
        } else if (response.status >= 400 && response.status < 500) {
          return Promise.reject(json);
        }
        return json;
      },
      () => {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    );

  const camelizeJSON = json =>
    camelizeKeys(json, (key, convert) => {
      return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
    });

  return fetch(url, fetchOptions)
    .then(checkResponse)
    .then(camelizeJSON);
};

export default fetchJson;
