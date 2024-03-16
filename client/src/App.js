import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setBackendData(data))
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    fetch("/albums")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!backendData || !Array.isArray(backendData.users)) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {backendData.users.map((user) => {
          return <div key={user}>{user}</div>;
        })}
      </div>
    );
  }
}

export default App;
