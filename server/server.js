const express = require("express");
const pg = require("pg");
require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const pool = require("./db");

app.get("/ping", async (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.use("/albums", require("./routes/albums"));

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
