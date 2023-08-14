const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/data1', (req, res) => {
  const data = { message: 'Hello from endpoint 1!' };
  res.json(data);
});

app.get('/data2', (req, res) => {
  const data = { message: 'Greetings from endpoint 2!' };
  res.json(data);
});

// 404 handler for non-matching routes
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
