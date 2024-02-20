/* eslint-disable no-unused-vars */
import axios from 'axios';

const determineUrl = (endpoint) => {
  const coreServerUrl = process.env.REACT_APP_MAIN_API_URL;
  let url = endpoint;
  if (url.split('/')[0] !== '') url = `${endpoint}`;
  return coreServerUrl + url;
};


const request = (verb, endpoint, data, requireAuth = false, multipart = false) => {
  const config = {
    url: determineUrl(endpoint),
    method: verb
  };
  if (data) {
    config.data = data;
  }
  if (requireAuth) {
    const contentType = multipart ? 'application/x-www-form-urlencoded' : 'application/json';
    config.headers = {
      'Content-Type': contentType
    };
  }

  return axios(config)
    .then((res) => {
      return res && res.data;
    })
    .catch((error) => {
      if (error && error.response) {
        const {
          response: {
            data: { message }
          }
        } = error;
        return error.response.data;
      }
      return error;
    });
};

export default request;