import { User } from './model/User';

const user = new User({ name: 'sam', age: 0 });
user.set({ name: 'howdy' });
console.log(`name: ${user.get('name')}: age: ${user.get('age')}`);
user.on('change', () => {});
user.on('change', () => {});
console.log(user);
