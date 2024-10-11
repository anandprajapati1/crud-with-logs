// server.js
const express = require('express');
const app = express();
// implement cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Your API routes
app.get('/api', (req, res) => {
    console.log("Request: ", req.query);
    res.json({ message: 'Hello from Express deployed on Vercel!' });
});

// Listen on port 8080 if run locally
app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});

module.exports = app;
