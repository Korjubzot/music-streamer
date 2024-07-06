import React, { useState, useEffect } from "react";
import axios from "axios";

function LibraryData() {
  const [albumsData, setAlbumsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5001/albums?_limit=10")
      .then((response) => {
        if (response.data.length > 0) {
          console.log(response.data);
          setAlbumsData(response.data);
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  function deleteAlbum(title, id) {
    axios.delete(`http://localhost:5001/albums/${id}`).then((response) => {
      console.log(`Deleting album: ${title} with id: ${id}`);
      window.location.reload(false);
    });
  }

  return (
    <div className="flex flex-col bg-gray-200">
      <table className="table-auto bg-white rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2">Artist</th>
            <th className="px-4 py-2">Album</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">Year</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {albumsData && albumsData.length > 0 ? (
            albumsData.map((album, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{album.artist}</td>
                <td className="border px-4 py-2">{album.title}</td>
                <td className="border px-4 py-2">{album.genre}</td>
                <td className="border px-4 py-2">{album.release_year}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => deleteAlbum(album.title, album.album_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border px-4 py-2" colSpan={4}>
                No albums found in the database. {error && error.message}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LibraryData;
