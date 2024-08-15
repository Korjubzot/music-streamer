import React, { useState, useEffect } from "react";
import axios from "axios";

import img from "../../temp/img/demondays.jpg";
import Player from "../player/player";

function AlbumPlayer() {
  const [albumsData, setAlbumsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5001/albums")
      .then((response) => {
        if (response.data.length > 0) {
          setAlbumsData(response.data[0]);
        }
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
      <>
        <div className="flex flex-col mr-4 justify-center items center bg-gray-100">
          <h1 className="text-gray-600 text-4xl mb-2">{albumsData.title}</h1>
          <h2 className="text-gray-500 text-2xl mb-2">
            by {albumsData.artist}
          </h2>
          <p className="text-gray-500">Released in {albumsData.release_year}</p>
          <img
            className="max-w-lg max-h-lg mt-4 rounded-lg shadow-md"
            src={img}
            alt="album art"
          />
        </div>
        <Player />
      </>
    );
  }
}

export default AlbumPlayer;
