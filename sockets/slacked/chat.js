const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(9000);
const io = socketio(expressServer);

// connection for / namespace
io.on('connection', (socket) => {
	console.log(socket.conn.server.pingInterval);
	//socket.conn.server.pingInterval = 1000;
	socket.emit('messageFromServer', { data: 'Welcome to the socketio server' });
	socket.on('messageToServer', (dataFromClient) => {
		console.log(dataFromClient);
	});
	socket.on('msgToServer', (msg) => {
		io.emit('msgToClients', msg);
	});
	socket.join('level1');
	socket.to('level1').emit('joined', `${socket.id} has joined level 1`);
});

// Connection for /admin namespace
io.of('/admin').on('connection', (socket) => {
	io.of('/admin').emit('admin', { msg: 'howdy admin' });
});

/**
 * Serv er can communicate aceross all namespaces, a client however needs to be in that namespace
 */
