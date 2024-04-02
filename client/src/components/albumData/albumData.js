import React, { useState, useEffect } from "react";
import Player from "../player/player";

import img from "../../temp/img/plasticBeach.jpg";
import axios from "axios";

function AlbumData() {
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
    return (
      <div className="text-red-500 font-bold text-xl">
        Error: {error.message}
      </div>
    );
  } else if (!albumsData) {
    return <div className="text-blue-500 font-bold text-xl">Loading...</div>;
  } else {
    return (
      <div
        data-testid="album-data"
        className="flex flex-col justify-center items-center bg-gray-100 max-h-screen"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {albumsData &&
            albumsData.map((album, index) => {
              return (
                <div
                  key={index}
                  className="my-2 bg-white p-6 rounded-lg shadow-md"
                >
                  <h1 className="text-green-600 text-4xl mb-2">
                    {album.title}
                  </h1>
                  <h2 className="text-gray-700 text-2xl mb-2">
                    by {album.artist}
                  </h2>
                  <p className="text-gray-500">
                    Released in {album.release_year}
                  </p>
                </div>
              );
            })}
        </div>
        <Player />
        <img
          className="max-w-lg max-h-lg mt-4 rounded-lg shadow-md"
          src={img}
          alt="album art"
        />
      </div>
    );
  }
}

export default AlbumData;
