const http = require('http');
const socketio = require('socket.io');
const { createSocket } = require('dgram');
const server = http.createServer((req, res) => {
	res.end('Connected');
});

const io = socketio(server);

io.on('connection', (socket, req) => {
	socket.emit('welcome_event', 'Socket io server here');
	socket.on('message', (msg) => {
		console.log(msg);
	});
});

server.listen(8000);
