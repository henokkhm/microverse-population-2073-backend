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
app.get('/bbf0577d-2cec-44e8-a8c7-a394c2fcca99', (req, res) => res.json(asiaData));
app.get('/46d44cfa-1781-4afd-89b7-e760af80e3b6', (req, res) => res.json(africaData));
app.get('/da57f7de-7c58-44b5-8052-f27f5daa1b07', (req, res) => res.json(latinAmericaData));
app.get('/3ba371eb-245a-4470-a465-85ded14872e0', (req, res) => res.json(europeData));
app.get('/cc7e48b7-c558-42dd-a889-d80a0ff9a377', (req, res) => res.json(northernAmericaData));
app.get('/11d94121-dd2c-47ee-a446-b3ddd61fa31a', (req, res) => res.json(oceaniaData));

// 404 handler for non-matching routes
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
