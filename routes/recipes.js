const express = require('express');
const pool = require('../db');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.get('/all', verifyToken, async (req, res) => {
  try {
    const recipes = await pool.query('SELECT * FROM recipes');
    res.json(recipes.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;