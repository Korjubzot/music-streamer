const express = require("express");
const pg = require("pg");
const { Pool } = require("pg");
require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5432,
});

// TODO MOVE TO .ENV

app.get("/ping", async (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

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

app.get("/albums", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM albums");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post(
  ("/albums",
  async (req, res) => {
    const { title, artist, release_year, genre } = req.body;
    try {
      const { rows } = await pool.query(
        "INSERT INTO albums (title, artist, release_year, genre) VALUES ($1, $2, $3, $4) RETURNING *",
        [title, artist, release_year, genre]
      );
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
