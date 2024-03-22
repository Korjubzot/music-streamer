import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";

import Player from "./components/player/player";
import Uploader from "./components/uploader/uploader";

function App() {
  // TODO move data getter into a seperate component
  const [albumsData, setAlbumsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5001/albums")
      .then((res) => {
        setAlbumsData(res.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!albumsData) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div>
          {albumsData &&
            albumsData.map((album, index) => {
              return (
                <h1 key={index} className="text-green-600">
                  {album.title} by {album.artist}, released in{" "}
                  {album.release_year}
                </h1>
              );
            })}
        </div>
        <Player />
        <Uploader />
      </div>
    );
  }
}

export default App;
