import { User } from './models/User';

const user = new User({ id: 1 });
// user.fetch();
// user.set({ name: 'doobie doo', age: 33 });
// user.save();
console.log(user.get('id'));
// const user2 = new User({name:'dummo'})
// user.save()
user.on('change', () => {
	console.log(console.log(user));
});

user.fetch();
user.set({ name: 'SAM0' });
user.save();
