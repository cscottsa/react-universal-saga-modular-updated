import { camelizeKeys } from 'humps';
import 'isomorphic-fetch';
import config from 'config';

const callApi = (endpoint) => {
  let fullUrl = `${config.apiBaseUrl}/${endpoint}`;

  // If request comes from server side, call API url directly.
  if (__SERVER__) {
    fullUrl = (endpoint.indexOf(config.apiBaseUrl) === -1)
      ? `${config.apiBaseUrl}/${endpoint}` : endpoint;
  }

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    )
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json);

      return Object.assign({},
        camelizedJson
      );
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happened.' })
    );
};

// api services
export const fetchTopics = () => callApi('/mylearning');

export default {
  fetchTopics
};

