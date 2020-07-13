const socket = io('localhost:9000');

socket.on('connect', () => {
	console.log(`Connected to namespace/:: ${socket.id}`);
});

socket.on('messageFromServer', (data) => {
	console.log(data);
	socket.emit('messageToServer', { data: 'Data from client' });
	socket.emit('newMessageToServer', { data: 'Data 2 timer from client' });
	socket.on('messageToClients', (msg) => {
		console.log(msg);
		//document.write('<h2>' + msg.text + '</h2>');
	});
});
socket.on('ping', () => {
	console.log('PING!!');
});
socket.on('pong', (latency) => {
	console.log(latency);
});
socket.on('msgToClients', (msg) => {
	document.querySelector('#messages').innerHTML += `<li>${msg.text}</li>`;
});
document.querySelector('#message-form').addEventListener('submit', (event) => {
	event.preventDefault();
	const msg = document.querySelector('#msg').value;
	console.log(msg);
	socket.emit('msgToServer', { text: msg });
});

const adminSocket = io('localhost:9000/admin', {
	pingInterval: 1000,
});
adminSocket.on('connect', () => {
	console.log(`Connected to name space /admin :: ${adminSocket.id}`);
	adminSocket.on('admin', (msg) => {
		console.log(msg);
	});
});
