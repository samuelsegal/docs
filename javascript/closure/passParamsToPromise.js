let counter = 0;
//very bad example
const movePlayer = (distance, direction) => {
	let playerMoved = true;
	//use the distance and dirtection to move player
	//perhaps in a canvas with xy coordinates
	setTimeout(() => {
		console.log(`moving player ${distance} ${direction}`);
		//once done return promise
		if (counter++ % 2 === 0) {
			playerMoved = true;
		} else {
			playerMoved = false;
		}
	}, 2000);
	counter += 2;
	return new Promise((resolve, reject) => {
		if (playerMoved) {
			console.log(`Counter: ${counter}`);
			console.log(`Player Moved: ${playerMoved}`);
			resolve('Player move succeeded');
		} else {
			console.log(`Counter: ${counter}`);
			console.log(`Player Moved: ${playerMoved}`);
			reject('Player move FAILED');
		}
	});
};

movePlayer(1, 'left')
	.then(result => {
		console.log(result);
		movePlayer(2, 'right')
			.then(result2 => {
				console.log(result2);
				movePlayer(3, 'left')
					.then(result3 => {
						console.log(result3);
						movePlayer(4, 'up')
							.then(result4 => {
								console.log(result4);
							})
							.catch(error => console.log(`Error: ${error}`));
					})
					.catch(error => console.log(`Error: ${error}`));
			})
			.catch(error => console.log(`Error: ${error}`));
	})
	.catch(error => console.log(`Error: ${error}`));
