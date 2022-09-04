import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {
    onSectionClick = () => {
        this.props.onVideoSelected(this.props.videoProp)
    }
  render() {
    const { thumbnails, title } = this.props.videoProp.snippet;
    return (
      <div onClick={this.onSectionClick} className="video-item item">
        <img className="ui image" alt="alt" src={thumbnails.default.url} />
        <div className="content">
          <p className="header">{title}</p>
        </div>
      </div>
    );
  }
}

export default VideoItem;
