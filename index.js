// index.js
const express = require('express');
const cors = require('cors');
// Load environment variables

const app = express();
const port = 5000;

// Middleware
app.use(cors());

// Test route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
