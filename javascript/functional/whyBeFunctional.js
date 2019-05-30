// Amazon shopping
const user = {
	name: 'Kim',
	active: true,
	cart: [{ name: 'item1', price: 4.0 }],
	purchases: [],
};

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.
const item = {
	name: '',
	price: 0,
};
const items = [{ name: 'shampoo', price: 3.0 }, { name: 'brownies', price: 4.0 }, { name: 'razor', price: 2.0 }];
//add items
user.cart = user.cart.concat(items);
//add tax
user.cart.map(i => {
	console.log(i);
	return (i.price += i.price * 0.03);
});

buyItem = itemToBuy => {
	return `item ${itemToBuy.name} sold for ${itemToBuy.price}`;
};

user.cart.map(cartItem => {
	console.log(buyItem(cartItem));
});
user.purchases = user.cart;
user.cart = [];
console.dir(`cart: ${user.cart} purchases: `);
user.purchases.forEach(p => console.log(p.name));
