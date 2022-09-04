import { useState, useEffect } from "react";
import Youtube from "../apis/Youtube";

const useVideo = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    onSearchSubmit(defaultSearchTerm);
  }, [defaultSearchTerm]);
  const onSearchSubmit = async (term) => {
    const res = await Youtube.get("/search", {
      params: { q: term },
    });
    setVideos(res.data.items);
  };

  return [videos, onSearchSubmit]
};

export default useVideo;
