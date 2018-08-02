import axios from "axios";

const authConfig = () => {
  return (
    window.localStorage.jwt && {
      headers: {
        Authorization: `Bearer ${window.localStorage.jwt}`
      }
    }
  );
};

export const get = url =>
  axios.get(url, authConfig()).then(response => response.data);
export const post = (url, data) =>
  axios.post(url, data, authConfig()).then(response => response.data);
export const patch = (url, data) =>
  axios.patch(url, data, authConfig()).then(response => response.data);
export const destroy = (url, data) =>
  axios.destroy(url, data, authConfig()).then(response => response.data);

export default {
  get,
  post,
  patch,
  destroy
};
