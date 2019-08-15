import { View } from './View';
import { User, UserProps } from '../models/User';
import { UserShow } from './UserShow';
import { UserForm } from './UserForm';
/**
 * User Edit - Html Component to edit a user. This compoment simply renders
 * a UserShow and UserForm in its defined template using regionsMap feature
 */
export class UserEdit extends View<User, UserProps> {
	/**
	 * override regionsMap for templating
	 */
	regionsMap(): { [key: string]: string } {
		return {
			userShow: '.user-show',
			userForm: '.user-form',
		};
	}
	onRender(): void {
		new UserShow(this.regions.userShow, this.model).render();
		new UserForm(this.regions.userForm, this.model).render();
	}
	template(): string {
		return `
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>
        `;
	}
}
