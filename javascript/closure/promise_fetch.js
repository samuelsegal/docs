const fetch = require('node-fetch');
const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(
	urls.map(url => {
		return fetch(url).then(resp => resp.json());
	})
)
	.then(results => {
		console.log(results[0]);
		console.log(results[1]);
		console.log(results[2]);
	})
	.catch(err => console.log('Error: ', err));

//Same thing using Async Await
const getData = async function() {
	try {
		const [users, posts, albums] = await Promise.all(
			urls.map(url => {
				return fetch(url).then(resp => resp.json());
			})
		);
		console.log('users: ', users);
		console.log('posts: ', posts);
		console.log('albums: ', albums);
		console.log('finito');
	} catch (err) {
		console.log('Error: ', err);
	}
};
getData();
