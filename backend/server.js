const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/db');
const User = require('./models/User');
const Project = require('./models/Project');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Serve static files from frontend build
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Connect to MySQL and Sync Tables
console.log("Starting the SkillSync engine...");
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// API health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'SkillSync API is running!' });
});

// Fallback route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});