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
    <form onSubmit={handleFormSubmit}>
      <input type="file" accept=".mp3" multiple onChange={handleFileChange} />
      <input type="text" placeholder="Album name" />
      <input type="text" placeholder="Artist" />
      <input type="text" placeholder="Release year" />
      <input type="text" placeholder="Genre" />
      <input type="text" placeholder="Album art" />
      <button type="submit" onClick={handleFormSubmit}>
        Upload
      </button>
    </form>
    // TODO build a form that will send matching data with the file to the database
  );
}

export default Uploader;
