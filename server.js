const express = require('express');
const bodyParser = require('body-parser');

// Connection to MongoDB
const db = require('./database.js');

// Create Web API
const app = express();

// Work in Json
app.use(express.json()); 

// Middleware "bodyparse" > Data from "application/json"
app.use(bodyParser.json());

// Add API routes
const api = require('./routes/api');
app.use('/api', api);

// Start Web API
const {port} = require('./config/server.json');
app.listen(port, () => {
    console.log(`Web API listening on port ${port}`);
})