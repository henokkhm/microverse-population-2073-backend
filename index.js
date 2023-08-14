const express = require('express');
const cors = require('cors');

const allRegionsData = require('./data/all-regions.json');
const asiaData = require('./data/asia.json')
const africaData = require('./data/africa.json')
const latinAmericaData = require('./data/latin-america.json')
const europeData = require('./data/europe.json')
const northernAmericaData = require('./data/northern-america.json')
const oceaniaData = require('./data/oceania.json')

const app = express();

// Enable CORS for all routes
app.use(cors());

// Root endpoint returns data for all regions
app.get('/', (req, res) => res.json(allRegionsData));

// Return data for each region
app.get('/asia', (req, res) => res.json(asiaData));
app.get('/africa', (req, res) => res.json(africaData));
app.get('/latin-america', (req, res) => res.json(latinAmericaData));
app.get('/europe', (req, res) => res.json(europeData));
app.get('/northern-america', (req, res) => res.json(northernAmericaData));
app.get('/oceania', (req, res) => res.json(oceaniaData));


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
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
