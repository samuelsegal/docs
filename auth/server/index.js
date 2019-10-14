//Main starting point of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
//DB setup
mongoose.connect('mongodb://localhost/auth');

//App set up
app.use(morgan('combined'));
//Specify allowed domains
const whitelist = 'http://localhost:3000';
const corsOptions = {
	origin: function(origin, callback) {
		const isWhiteListed = whitelist.indexOf(origin) !== -1;
		callback(null, isWhiteListed);
	},
};
app.use(cors(corsOptions));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`server listenting on port ${port}`);
