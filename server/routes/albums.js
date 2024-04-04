const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  const limit = req.query._limit || 1;
  try {
    const { rows } = await pool.query("SELECT * FROM albums LIMIT $1", [limit]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(
      "SELECT * FROM albums WHERE album_id = $1",
      [id]
    );
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: "Album not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
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
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, artist, release_year, genre } = req.body;
  try {
    const { rows } = await pool.query(
      "UPDATE albums SET title = $1, artist = $2, release_year = $3, genre = $4 WHERE id = $5 RETURNING *",
      [title, artist, release_year, genre, id]
    );
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: "Album not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rowCount } = await pool.query(
      "DELETE FROM albums WHERE album_id = $1",
      [id]
    );
    if (rowCount > 0) {
      res.json({ message: "Album deleted" });
    } else {
      res.status(404).json({ error: "Album not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
