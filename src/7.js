const { response } = require('express');

app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
});
