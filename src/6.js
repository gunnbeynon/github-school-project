// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');

// Creating an instance of the Express server
const app = express();

// Configuring the Express server to use JSON data and set up a static folder for files
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Defining a route that will handle GET requests to /api/students
app.get('/api/students', (req, res) => {
  // Fetching all students from the database
  const students = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    { id: 3, name: 'Bob Smith', age: 40 }
  ];

  // Sending the students as a JSON response
  res.json(students);
});

// Defining a route that will handle POST requests to /api/students
app.post('/api/students', (req, res) => {
  // Creating a new student object with the passed-in data
  const newStudent = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age
  };

  // Adding the new student to the database
  students.push(newStudent);

  // Sending a JSON response with the added student
  res.json(newStudent);
});

// Defining a route that will handle DELETE requests to /api/students/:id
app.delete('/api/students/:id', (req, res) => {
  // Finding the student with the specified ID
  const student = students.find(s => s.id === parseInt(req.params.id));

  // Removing the student from the database
  const index = students.indexOf(student);
  if (index !== -1) {
    students.splice(index, 1);
  }

  // Sending a JSON response with the deleted student
  res.json(student);
});

// Starting the server
app.listen(3000, () => console.log('Server started on port 3000'));
