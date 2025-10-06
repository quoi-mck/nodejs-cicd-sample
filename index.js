const express = require('express');
const os = require('os');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js + Docker CI/CD sample!', env: process.env.NODE_ENV || 'development' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', hostname: os.hostname() });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
