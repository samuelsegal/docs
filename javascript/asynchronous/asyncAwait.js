const fetch = require('node-fetch');
//Fetch using the chain provided with .then
fetch('https://gigety.com/rest/searchAllPosts')
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.log(err));

//Same thing using async for syntactic sugar
async function fetchPosts() {
	try {
		const response = await fetch('https://gigety.com/rest/searchAllPost');
		const data = await response.json();
		console.log(data);
		console.log('All done');
	} catch (err) {
		console.log(err);
	}
}
fetchPosts();
