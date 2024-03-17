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
      <button onClick={trackBackwardHandler}>Backward</button>
      <button onClick={playPauseHandler}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={trackForwardHandler}>Forward</button>
    </div>
  );
}

export default Player;
