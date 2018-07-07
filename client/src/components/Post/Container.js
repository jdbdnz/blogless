import React from "react";
import Post from "./Presenter";
import axios from "axios";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: props.match.params.id,
        title: "",
        body: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get(`/api/v1/posts/${this.state.post.id}.json`)
      .then(response => {
        this.setState({
          post: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return <Post post={this.state.post} />;
  }
}

export default Container;
