import { UserForm } from './views/UserForm';
import { User } from './models/User';
const user = User.buildUser({ id: 1, name: 'sadfg' });
//(async function() {
//await user.fetch();
user.fetch();
const userForm = new UserForm(document.getElementById('root'), user);
userForm.render();
//})();
