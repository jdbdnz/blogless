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

export default {
  get
};
