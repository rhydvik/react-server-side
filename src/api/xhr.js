/* @flow */
import axios from 'axios';
import {get} from 'lodash';

const process = {
  env: {
    API_BASE_URL: '', // add your api endpoint here
  },
};

// for api that don't use any authentication
export const authApi = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 60 * 1000,
});

// this will need tokens to make api call
export const secureApi = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 60 * 1000,
});

const logRequest = (request: Object) => {
  const {method, baseURL, url, headers, params} = request;
  console.log('API', 'Request', method, baseURL, url, headers, params);
  console.log('REQUEST', request);
};

const handleSecureRequest = (config: Object) => {
  const accessToken = get(
    JSON.parse(localStorage.getItem('user')),
    'token',
    '',
  );
  console.log(accessToken, 'accessToken');
  const {headers} = config;
  if (accessToken) {
    headers.token = accessToken;
  }
  headers['Content-Type'] = 'application/x-www-form-urlencoded';
  config.transformResponse = response => {
    const parsedData = response && JSON.parse(response);
    return get(parsedData, 'data', {});
  };
  logRequest(config);
  return config;
};

const handleResponse = (response: Object) => {
  // const {data, status, config} = response;
  // logRequest(config);
  console.log('API', 'Response', response);
  return response;
};

const handleRequestError = (error: Object) => {
  console.log('API - Error', error);
  throw error;
};

const handleResponseError = (error: Object) => {
  console.log('ERRROR RESPONSE', error);
  throw error;
};

secureApi.interceptors.request.use(handleSecureRequest, handleRequestError);
secureApi.interceptors.response.use(handleResponse, handleResponseError);

const handleAuthRequest = (config: Object) => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  config.transformResponse = response => {
    const parsedData = response && JSON.parse(response);
    return get(parsedData, 'data', {});
  };
  logRequest(config);
  return config;
};

authApi.interceptors.request.use(handleAuthRequest, handleRequestError);
authApi.interceptors.response.use(handleResponse, handleResponseError);
