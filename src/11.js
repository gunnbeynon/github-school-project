// A simple server that responds to GET requests at /api/greeting
const express = require('express');
const app = express();

app.get('/api/greeting', (req, res) => {
  res.send({ message: 'Hello, World!' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
