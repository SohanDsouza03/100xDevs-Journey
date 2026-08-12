const express = require('express');
const port = 2800;
const app = express();

app.get('/', function(req, res) {
  res.send('Hello Mr Sohan Dsouza!');
});

app.listen(port)

// This is a simple HTTP server using Express.js that listens on port 3000 and responds with "Hello World!" when the root URL is accessed.