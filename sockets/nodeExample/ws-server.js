const http = require('http');

const webSocket = require('ws');

const server = http.createServer((req, res) => {
	res.end('COnnected');
});

const wss = new webSocket.Server({ server });

wss.on('headers', (headers, req) => {
	console.log(headers);
});

wss.on('connection', (ws, req) => {
	//console.log(req);
	ws.send('Web socket service at you needs sir <node></node>');
	ws.on('message', (msg, req) => {
		console.log(msg);
	});
});

server.listen(8000);
