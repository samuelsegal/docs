import { UserForm } from './views/UserForm';
import { User } from './models/User';
const user = User.buildUser({ id: 1, name: 'sadfg', age: 20 });
//(async function() {
//await user.fetch();
user.fetch();
const root = document.getElementById('root');
if (root) {
	const userForm = new UserForm(root, user);
	userForm.render();
} else {
	throw new Error('Root Element Not Found!!');
}

//})();
