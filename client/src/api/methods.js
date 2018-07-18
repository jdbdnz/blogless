import axios from "axios";

const handleRequest = (method, url, data) => {
  return method(url, data)
    .then(response => response.data)
    .catch(error => {
      console.log({ error });
      return { error };
    });
};

export const get = (url, data) => handleRequest(axios.get, url, data);
export const create = (url, data) => handleRequest(axios.post, url, data);
export const patch = (url, data) => handleRequest(axios.patch, url, data);
export const destroy = (url, data) => handleRequest(axios.destroy, url, data);

export default {
  get,
  create,
  patch,
  destroy
};
