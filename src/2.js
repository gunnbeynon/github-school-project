const express = require('express');
const app = express();

// Define a GET route for '/'
app.get('/', (req, res) => {
  // Render an HTML page with a form
  res.send(`<form action="/login" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username"><br><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password"><br><br>
    <input type="submit" value="Login">
  </form>`);
});

// Define a POST route for '/login'
app.post('/login', (req, res) => {
  // Get the username and password from the request body
  const username = req.body.username;
  const password = req.body.password;

  // Check if the username and password are valid
  if (username === 'admin' && password === 'password') {
    // If they are, set a session variable to remember that the user is logged in
    req.session.loggedin = true;
    res.redirect('/home');
  } else {
    // If not, show an error message
    res.send('Invalid username or password');
  }
});

// Define a GET route for '/home'
app.get('/home', (req, res) => {
  // Check if the user is logged in
  if (req.session.loggedin) {
    // If they are, show them the home page
    res.send('Welcome to the home page!');
  } else {
    // If not, redirect them to the login page
    res.redirect('/');
  }
});

// Define a GET route for '/logout'
app.get('/logout', (req, res) => {
  // Destroy the session and redirect the user to the login page
  req.session.destroy(() => {
    res.redirect('/');
  });
});
