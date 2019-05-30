const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: [],
};

const history = [];

// const compose = (accFunc, currentFunc) => (...args) => accFunc(currentFunc(...args))

// const purchaseItem = (...funcs) => funcs.reduce(compose)

const purchaseItem = (...funcs) =>
	funcs.reduce((accFunc, currentFunc) => {
		return (...args) => accFunc(currentFunc(...args));
	});

function addItemToCart(user, item) {
	return { ...user, cart: [...user.cart, item] };
}

function applyTaxToItems(user) {
	const { cart } = user;
	const taxRate = 1.3;
	const updatedCart = cart.map(item => ({ ...item, price: item.price * taxRate }));
	return { ...user, cart: updatedCart };
}

function buyItem(user) {
	return { ...user, purchases: user.cart };
}

function emptyCart(user) {
	return { ...user, cart: [] };
}

// higher order function to give each function a push to history
const pushToHistory = fn => (...args) => {
	const result = fn(...args);
	history.push(result);
	return result;
};

// apply the pushToHistory functions
const funcsWithHistory = [emptyCart, buyItem, applyTaxToItems, addItemToCart].map(fn => pushToHistory(fn));

// make a single purchase function.. a little more declarative.
const purchase = purchaseItem(...funcsWithHistory);

purchase(user, { name: 'laptop', price: 200 });

purchase(user, { name: 'bag', price: 50 });
// console.log(purchase1)
console.log(history);
