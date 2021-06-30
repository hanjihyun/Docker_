const express = require('express');

//constants
const PORT = 5000;

//App
const app = express();
app.get('/', (req, res) => {
  res.send('반가워!!!ggg~~~~');
});

app.listen(PORT);
console.log('Running server');
