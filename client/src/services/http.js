import axios from 'axios';

import { toast } from 'react-toastify';

axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedError) {
      return toast.error('An unexpected error occurred!');
    }
    return Promise.reject(error);
  }
);

const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  source: axios.CancelToken.source(),
};

export default methods;
