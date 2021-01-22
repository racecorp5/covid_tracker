const axios = require('axios');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

// Add headers
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.listen(3000, () => {
  process.stdout.write('Server running on port 3000');
});

app.get('/v1/covidData', async (req, res, next) => {
  try {
    const api = 'https://api.covidtracking.com/v1/states/current.json';
    const { data } = await axios.get(api);
    res.json(data);
    next();
  } catch (err) {
    res.status(500).json({ error: `Error: ${err}` });
  }
});
