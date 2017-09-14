import 'isomorphic-fetch';
// import { exceptionLogging } from 'ErrorLogging';

export const createRequest = (method, body) => ({
  method,
  body,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // checkout-frontend supports csrf protection filters running on checkout-service
    'X-Requested-By': 'dinero',
  },
});

const apiRequest = ({ url, method, body }) => (
  fetch(url, createRequest(method, body))
    .then((response) => {
      const statusCode = response.status;
      if (statusCode >= 200 && statusCode < 300) {
        return response; // Valid response
      } else if (statusCode === 400 || statusCode === 403 || statusCode === 500) {
        return response; // Valid error response
      }

      // This is where we would consider what we do with broken API requests...
      // } else if (statusCode === 401) {
      //   window.location.assign(config.urls.unauthorisedRedirect);
      //   return { isRedirected: true };
      // }
      // Unknown error codes (fetch only fails for network error codes)
      throw new Error(statusCode);
    })
    .catch((ex) => {
      // exceptionLogging(ex);
    })
);

export default apiRequest;
