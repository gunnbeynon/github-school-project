// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create a new instance of the Express server
const app = express();

// Set up body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes for different endpoints
app.get('/', (req, res) => {
  // Render index.html by default
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/login', (req, res) => {
  // Render login.html template
  res.render('login');
});

app.post('/login', (req, res) => {
  // Verify user credentials and redirect to dashboard page if valid
  const username = req.body.username;
  const password = req.body.password;
  if (username === 'admin' && password === 'password') {
    res.redirect('/dashboard');
  } else {
    res.send('Invalid credentials');
  }
});

app.get('/dashboard', (req, res) => {
  // Render dashboard page if user is logged in
  const username = req.body.username;
  if (username === 'admin') {
    res.render('dashboard', { title: 'Dashboard' });
  } else {
    res.redirect('/login');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
