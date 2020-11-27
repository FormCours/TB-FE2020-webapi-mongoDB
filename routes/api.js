const router = require('express').Router();

// Add routes
require('./productApi')(router);

module.exports = router;