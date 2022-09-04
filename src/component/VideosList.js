import React from "react";
import VideoItem from "./VideoItem";

class VideosList extends React.Component {
  render() {
    const videos = this.props.videos.map((video) => {
      return <VideoItem key={video.id.videoId} videoProp={video} onVideoSelected={this.props.onVideoSelected} />;
    });
    return <div className="ui relaxed divided list">{videos}</div>;
  }
}

export default VideosList;
