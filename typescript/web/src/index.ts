import { User } from './models/User';

const user = new User({ id: 1 });
// user.fetch();
// user.set({ name: 'doobie doo', age: 33 });
// user.save();

// const user2 = new User({name:'dummo'})
// user.save()
user.events.on('change', () => {
	console.log('sdfwrf');
});

user.events.trigger('change');
