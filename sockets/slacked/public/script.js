/**
 * / Namespace
 */
const socket = io('localhost:9000');

socket.on('connect', () => {
	console.log(`Connected to namespace/:: ${socket.id}`);
});

socket.on('messageFromServer', (data) => {
	console.log(data);
	socket.emit('messageToServer', { data: 'Data from client' });
	socket.on('messageFromServer', (msg) => {
		console.log(msg);
	});
});
socket.on('msgToClients', (msg) => {
	document.querySelector('#messages').innerHTML += `<li>${msg.text}</li>`;
});

socket.on('joined', (msg) => {
	console.log(msg);
});
document.querySelector('#message-form').addEventListener('submit', (event) => {
	event.preventDefault();
	const msg = document.querySelector('#msg').value;
	console.log(msg);
	socket.emit('msgToServer', { text: msg });
});

/**
 * Admin Namepace
 */
const adminSocket = io('localhost:9000/admin');
adminSocket.on('connect', () => {
	console.log(`Connected to name space /admin :: ${adminSocket.id}`);
	adminSocket.on('admin', (msg) => {
		console.log(msg);
	});
});
