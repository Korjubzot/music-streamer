import React, { useState, useEffect } from "react";
import Player from "../player/player";

import img from "../../temp/img/demondays.jpg";
import axios from "axios";

function AlbumData() {
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
    return (
      <div className="text-red-500 font-bold text-xl">
        Error: {error.message}
      </div>
    );
  } else if (!albumsData) {
    return <div className="text-blue-500 font-bold text-xl">Loading...</div>;
  } else {
    return (
      // TODO - clean all this up and merge player.js and albumData.js into a single component
      // The layout of this is completely bizarre and I don't know why I did it this way
      // CSS is tangled and spread in a strange way, and both player and albumData should probably just be one component
      // At least for now.
      <div className="flex justify-center items-center bg-gray-100">
        <div className="flex flex-col mr-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="my-2 bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-green-600 text-4xl mb-2">
                {albumsData.title}
              </h1>
              <h2 className="text-gray-700 text-2xl mb-2">
                by {albumsData.artist}
              </h2>
              <p className="text-gray-500">
                Released in {albumsData.release_year}
              </p>
            </div>
          </div>
          <Player />
        </div>
        <div>
          <img
            className="max-w-lg max-h-lg mt-4 rounded-lg shadow-md"
            src={img}
            alt="album art"
          />
        </div>
      </div>
    );
  }
}

export default AlbumData;
