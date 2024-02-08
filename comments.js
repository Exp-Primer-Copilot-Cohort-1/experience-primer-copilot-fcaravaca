// Create web server
const express = require('express');
const app = express();

// Static files
app.use(express.static('public'));

// Data
const data = require('./data.js');

// Routes
app.get('/comments', (req, res) => {
  res.json(data);
});

app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = data.find(comment => comment.id === id);
  res.json(comment);
});

// Start server
app.listen(3000, () => {
  console.log('Web server listening on port 3000');
});
