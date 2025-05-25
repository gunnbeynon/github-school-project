let express = require('express');
let app = express();
app.use(express.static('public'));

// Add your route handlers here

app.listen(3000);
