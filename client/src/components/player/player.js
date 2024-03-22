import React from "react";
import { useState } from "react";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  function trackForwardHandler() {
    console.log("Track forward");
  }

  function trackBackwardHandler() {
    console.log("Track backward");
  }

  function playPauseHandler() {
    console.log(isPlaying ? "Pause" : "Play");
    setIsPlaying(!isPlaying);
  }
  return (
    <div>
      <button
        className="bg-blue-500 m-2 p-1 rounded"
        onClick={trackBackwardHandler}
      >
        Backward
      </button>
      <button className="bg-red-500 m-2 p-1 rounded" onClick={playPauseHandler}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button
        className="bg-blue-500 m-2 p-1 rounded"
        onClick={trackForwardHandler}
      >
        Forward
      </button>
    </div>
  );
}

export default Player;
