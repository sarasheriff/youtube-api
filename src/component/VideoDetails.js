import React from "react";

const VideoDetails = ({ video }) => {
    const videoSrc = `https://www.youtube.com/embed/${video?.id.videoId}`
    if(!video)
    return <div>loading...</div>
  return (
    <div>
    <div className="ui embed">
        <iframe title="video player" src={videoSrc}/>
    </div>
      <div className="ui segment">
        <h4 className="ui header">{video?.snippet.title}</h4>
        <p>{video?.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
