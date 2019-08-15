import { UserForm } from './views/UserForm';
import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
const user = User.buildUser({ id: 1, name: 'sadfg', age: 20 });
//(async function() {
//await user.fetch();
user.fetch();
const root = document.getElementById('root');
if (root) {
	const userEdit = new UserEdit(root, user);
	userEdit.render();
	console.log(userEdit);
} else {
	throw new Error('Root Element Not Found!!');
}

//})();
