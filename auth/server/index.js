//Main starting point of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

//DB setup
mongoose.connect('mongodb://localhost/auth');

//App set up
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`server listenting on port ${port}`);
