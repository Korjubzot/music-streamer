import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState(null);
  const [albumsData, setAlbumsData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setBackendData(data))
  //     .catch((error) => setError(error));
  // }, []);

  useEffect(() => {
    fetch("http://localhost:5001/albums")
      .then((res) => res.json())
      .then((data) => setAlbumsData(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!albumsData) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {albumsData &&
          albumsData.map((album, index) => {
            return (
              <div key={index}>
                {album.name} by {album.artist}, released in {album.release_year}
              </div>
            );
          })}
      </div>
    );
  }
}

export default App;
