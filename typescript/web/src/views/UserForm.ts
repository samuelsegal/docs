import { User, UserProps } from '../models/User';
import { View } from './View';
export class UserForm extends View<User, UserProps> {
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.set-name': this.onSetNameClick.bind(this),
			'click:.set-model': this.onSaveClick,
		};
	}
	onSaveClick = (): void => {
		this.model.save();
	};
	/**
	 * onSetNameClick
	 * normally onSetNameClick would be an arrow function to handle "this".
	 * Instead for this function we bind this when we map it in eventsMap
	 * simply for reference or demonstrative purpose
	 */
	onSetNameClick(): void {
		//console.log(`${this.eventsMap}`);
		const input = this.parent.querySelector('input');
		if (input) {
			const name = input.value;
			this.model.set({ name });
		}
	}
	onSetAgeClick = (): void => {
		//console.log(`${this.eventsMap} age clicked`);
		this.model.setRandomAge();
	};

	template(): string {
		return `
            <div>
                <input placeholder="${this.model.get('name')}"/>
				<button class="set-name">Change Name</button>
				<button class="set-age">Set random age</button>
				<button class="set-model">Save</button>
            </div>
        `;
	}
}
