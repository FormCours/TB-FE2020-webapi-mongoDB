const mongoose = require('mongoose');
const { urlConnection } = require('./config/db.json');

// Initialize connection to MongoDB
mongoose.connect(urlConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connection successful !');
}).catch(() => {
    console.log('Error on MongoDB connection');

    // Kill app on error
    process.exit();
})

const db = mongoose.connection;
module.exports = db;