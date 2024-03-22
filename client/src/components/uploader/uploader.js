import React, { useState } from "react";
import axios from "axios";

function Uploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(selectedFile);

    // const formData = new FormData();
    // formData.append("file", selectedFile);

    // axios
    //   .post("http://localhost:5001/upload", formData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // TODO build this on the database end.
  }
  return (
    <div className="w-full max-w-xs text-green-600 flex flex-col items-center justify-center">
      <form className="bg-white shadow-md" onSubmit={handleFormSubmit}>
        <input
          type="file"
          accept=".mp3"
          multiple
          onChange={handleFileChange}
          placeholder="Upload an mp3"
        />
        <input type="text" placeholder="Album name" />
        <input type="text" placeholder="Artist" />
        <input type="text" placeholder="Release year" />
        <input type="text" placeholder="Genre" />
        <input
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          placeholder="Album art"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
    // TODO style this form
  );
}

export default Uploader;
