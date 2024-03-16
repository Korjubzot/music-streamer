const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    users: [
      "user1",
      "user2",
      "user3",
      "user4",
      "user5",
      "user6",
      "user7",
      "user8",
      "user9",
      "user10",
      "user11",
    ],
  });
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
