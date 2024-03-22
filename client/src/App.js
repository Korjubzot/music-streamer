import React from "react";

import AlbumData from "./components/albumData/albumData";
import Player from "./components/player/player";
import Uploader from "./components/uploader/uploader";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <AlbumData />
      <Player />
      <Uploader />
    </div>
  );
}

export default App;
