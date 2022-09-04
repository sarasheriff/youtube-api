import React, { useEffect, useState } from "react";
import useVideo from "../hooks/useVideo";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import VideosList from "./VideosList";


const App = () => {
  const [videoDetails, setVideoDetails] = useState(null)
  const [video, onSearchSubmit] = useVideo('Angular js framework')

  useEffect(()=> {
    setVideoDetails(video[0])
  }, [video])


  const selectedVideoHandler = (video) => {
    console.log(video);
    setVideoDetails(video)
  };

  return (
    <div className="ui container">
      <SearchBar onSubmit={onSearchSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={videoDetails} />
          </div>
          <div className="five wide column">
            <VideosList
              videos={video}
              onVideoSelected={selectedVideoHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
