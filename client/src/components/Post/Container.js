import React from "react";
import PropTypes from "prop-types";
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

Container.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Container;
