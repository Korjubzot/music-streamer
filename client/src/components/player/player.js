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
    <div
      data-testid="player"
      className=" space-x-4 h-screen bg-gray-100 p-4 rounded-lg"
    >
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={trackBackwardHandler}
      >
        Backward
      </button>
      <button
        className={`font-bold py-2 px-4 rounded ${
          isPlaying
            ? "bg-red-500 hover:bg-red-700"
            : "bg-green-500 hover:bg-green-700"
        }`}
        onClick={playPauseHandler}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={trackForwardHandler}
      >
        Forward
      </button>
    </div>
  );
}

export default Player;
