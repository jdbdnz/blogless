import React from "react";
import { Link } from "react-router-dom";
import { Icon, Button, Input } from "antd";
import "./style.css";

class Presenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { draft: !props.post.published_at };
  }

  onChange = field => {
    return e => this.props.onChange({ [field]: e.target.value });
  };

  render() {
    const { post } = this.props;
    return (
      <div>
        <header className="Header">
          <div>
            <Link to="/">
              <Icon type="left" style={{ fontSize: "34px" }} />
            </Link>
          </div>
          <div style={{ textAlign: "right" }}>
            {this.state.draft ? (
              <Button type="normal">Publish</Button>
            ) : (
              <Button type="normal">Unpublish</Button>
            )}
          </div>
        </header>

        <div className="Post">
          <Input
            className="Post-title"
            defaultValue={post.title}
            placeholder="Title"
            onChange={this.onChange("title")}
          />
          <textarea
            className="Post-body"
            placeholder="Once upon a blog..."
            onChange={this.onChange("body")}
            defaultValue={post.body}
          />
        </div>
      </div>
    );
  }
}

export default Presenter;
