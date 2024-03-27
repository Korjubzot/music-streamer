import React, { useState, useEffect } from "react";

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
    return <div>Error: {error.message}</div>;
  } else if (!albumsData) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flex flex-col justify-center items-center">
        <div>
          {albumsData &&
            albumsData.map((album, index) => {
              return (
                <h1 key={index} className="text-green-600 text-4xl">
                  {album.title} by {album.artist}, released in{" "}
                  {album.release_year}
                </h1>
              );
            })}
        </div>
        <img className="max-w-lg max-h-lg" src={img} alt="album art" />
      </div>
    );
  }
}

export default AlbumData;
