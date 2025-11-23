import React, { Component } from "react";
import LikeDisplay from "./LikeDisplay";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likeCount: 0,
      isLiked: false,
    };
  }

  toggleLike = () => {
    this.setState((prevState) => {
      const wasLiked = prevState.isLiked;
      const previousCount = prevState.likeCount;

      return {
        isLiked: !wasLiked,
        likeCount: wasLiked ? previousCount - 1 : previousCount + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h3>פוסט לדוגמה</h3>

        <button onClick={this.toggleLike}>
          {this.state.isLiked ? "Unlike" : "Like"}
        </button>

        <LikeDisplay
          likeCount={this.state.likeCount}
          isLiked={this.state.isLiked}
        />
      </div>
    );
  }
}

export default Post;
