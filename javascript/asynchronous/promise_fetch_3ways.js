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
	.catch(err => console.log('Error: ', err))
	.finally(() => console.log('finally data: '));

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
//getData();

//Same thingh usinf `for await of`
const fetchPosts2 = async function() {
	const arrayOfPromises = urls.map(url => fetch(url));
	for await (let request of arrayOfPromises) {
		const data = await request.json();
		console.log('for await of: ', data);
	}
	console.log('DONE');
};
fetchPosts2();
