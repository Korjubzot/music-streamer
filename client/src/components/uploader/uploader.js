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
      className="w-full max-w-xs text-green-600 flex flex-col items-center justify-center"
    >
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleFormSubmit}
      >
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="file"
          accept=".mp3"
          multiple
          onChange={handleFileChange}
          placeholder="Upload an mp3"
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
          type="text"
          placeholder="Album name"
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
          type="text"
          placeholder="Artist"
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
          type="text"
          placeholder="Release year"
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
          type="text"
          placeholder="Genre"
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          placeholder="Album art"
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
