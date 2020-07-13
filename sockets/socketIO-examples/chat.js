const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000);
const io = socketio(expressServer);
io.on('connection', (socket) => {
	console.log(socket.conn.server.pingInterval);
	//socket.conn.server.pingInterval = 1000;
	socket.emit('messageFromServer', { data: 'Welcome to the socketio server' });
	socket.on('messageToServer', (dataFromClient) => {
		console.log(dataFromClient);
	});
	socket.on('msgToServer', (msg) => {
		console.log(msg);
		io.emit('msgToClients', { text: msg.text });
	});
});
