const express = require('express');
const path = require('path');

// call express.js
const app = express();

// define middleware json
app.use(express.json());

// load middleware for static files
app.use(express.static(path.join(_dirname, 'public')));

// load middleware for api router
app.use('api/notes', require('//middleware/api'));



// start the server
const PORT = 3000;

app.listen(PORT, () => console.log(`Listening at ${PORT}`))