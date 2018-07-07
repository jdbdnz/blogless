import React from "react";
import Posts from "./Presenter";
import axios from "axios";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/v1/posts.json")
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return <Posts posts={this.state.posts} />;
  }
}

export default Container;
