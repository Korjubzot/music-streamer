import React, { useState } from "react";
// import axios from "axios";

function Uploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(selectedFile);
  }

  return (
    <div
      data-testid="uploader"
      className="w-full max-w-xs text-gray-700 flex flex-col items-center justify-center"
    >
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleFormSubmit}
      >
        <label htmlFor="music-upload">Upload mp3 files</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="file"
          accept=".mp3"
          multiple
          onChange={handleFileChange}
          placeholder="Upload an mp3"
          id="music-upload"
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-4"
          type="text"
          placeholder="Album name"
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-4"
          type="text"
          placeholder="Artist"
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-4"
          type="text"
          placeholder="Release year"
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-4"
          type="text"
          placeholder="Genre"
        />
        <label htmlFor="art-upload">Upload album artwork</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-4"
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          placeholder="Album art"
          id="art-upload"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default Uploader;
