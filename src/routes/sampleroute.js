const express = require('express'); // Importing the Express Dependency
const samplerouter = express.Router();
samplerouter.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = samplerouter;
