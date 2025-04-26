let express = require('express');
const app = express();

app.use(express.json());

app.post('/students', (req, res) => {
  const { name } = req.body;
  res.send(name);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
