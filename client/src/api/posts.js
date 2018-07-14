import axios from "axios";
import { setPosts } from "../ducks/posts";

const get = dispatch => {
  axios
    .get("/api/v1/posts.json")
    .then(response => {
      dispatch(setPosts(response.data));
    })
    .catch(error => console.log(error));
};

export default {
  get
};
