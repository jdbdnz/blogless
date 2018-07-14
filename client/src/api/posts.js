import axios from "axios";
import { setPosts } from "../ducks/posts";

const get = (dispatch, callback = () => {}) => {
  axios
    .get("/api/v1/posts.json")
    .then(response => {
      dispatch(setPosts(response.data));
      callback();
    })
    .catch(error => console.log(error));
};

const patch = (dispatch, post, callback = () => {}) => {
  axios
    .patch(`/api/v1/posts/${post.id}.json`, { post })
    .then(response => {
      callback();
    })
    .catch(error => console.log(error));
};

export default {
  get,
  patch
};
