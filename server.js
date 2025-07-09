require('dotenv').config();
  const express = require('express');
  const cors = require('cors');
  const pool = require('./db');
  const authRoutes = require('./routes/auth');
  const userRoutes = require('./routes/users');
  const homeRoutes = require('./routes/home');
  const recipeRoutes = require('./routes/recipes');

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.static('public'));

  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/home', homeRoutes);
  app.use('/api/recipes', recipeRoutes);

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });