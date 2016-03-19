import fetch from 'isomorphic-fetch';

export default function request (uri, options) {
  const API = process.env.API || 'http://localhost:3000/api';

  return fetch(API + uri, options)
    .then((response) => {
      if (response.status >= 300) {
        const error = new Error(response.statusText);
        error.status = response.status;
        throw error;
      }
      return response.json();
    })
    .then((data) => ({data}))
    .catch((error) => ({error}));
}
