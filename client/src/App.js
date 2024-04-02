import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AlbumData from "./components/albumData/albumData";
import Uploader from "./components/uploader/uploader";
import Header from "./components/Header/header";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center items-center">
        <Header />
        <Routes>
          <Route path="/" exact element={<AlbumData />} />
          <Route path="/upload" element={<Uploader />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
