import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AlbumData from "./components/albumData/albumData";
import Player from "./components/player/player";
import Uploader from "./components/uploader/uploader";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" exact element={<AlbumData />} />
          <Route path="/upload" element={<Uploader />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
