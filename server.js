// server.js
const express = require('express');
const app = express();

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
