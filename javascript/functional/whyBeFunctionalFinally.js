const loggy = require('../loggy');
//THis is my implementation after learning from aneagoie excellent advanced javascript course functional section
//Note: Alot of code is for demonstration only, such as using Object.assign rather than spread or rest paramters
// Amazon shopping
const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: [],
};
const soundcard = {
	name: 'soundcard',
	price: 222,
};
const monitor = {
	name: 'monitor',
	price: 500,
};
const items = [soundcard, monitor];
//including history so we can review orders history

//Implement a cart feature:
// 1. Add items to cart.
function addItemsToCart(user, items) {
	//let updatedCart = user.cart.concat(items);
	//const updatedUser = Object.assign({}, user, { cart: items });
	//return updatedUser;
	return { ...user, cart: user.cart.concat(items) };
}
//console.log(addItemsToCart(user, items));
//console.dir(user);
// 2. Add 3% tax to item in cart
function addSalesTax(user) {
	console.log(user);
	let taxPercent = 0.03;
	user.cart.map(item => {
		return (item.price += item.price * taxPercent);
	});
	const updatedUser = Object.assign({}, user, { cart: items });
	return updatedUser;
}
//console.log(addSalesTax(addItemsToCart(user, items), 0.03));
//console.log(user);

// 3. Buy item: cart --> purchases
function purchaseItems(user) {
	return { ...user, purchases: user.cart };
}
//console.log(purchaseItems(addSalesTax(addItemsToCart(user, items), 0.03)));
//console.log(user);

// 4. Empty cart
function emptyCart(user) {
	return { ...user, cart: [] };
}
//console.log(emptyCart(purchaseItems(addSalesTax(addItemsToCart(user, items), 0.03))));
//console.log(user);

//Compose - simply return the result of f calling the result of g
const compose = (f, g) => (...functions) => f(g(...functions));
const goShopping = (...functions) => functions.reduce(compose);

loggy.log(goShopping(emptyCart, purchaseItems, addSalesTax, addItemsToCart)(user, items));
