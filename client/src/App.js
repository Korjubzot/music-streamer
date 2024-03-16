import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <div>
      {typeof backendData.users === "undefined"
        ? "Loading..."
        : backendData.users.map((user, i) => {
            return <div key={i}>{user}</div>;
          })}
    </div>
  );
}

export default App;
