import { User } from '../models/User';
export class UserForm {
	constructor(public parent: Element, public model: User) {}
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:button': this.onButtonClick,
			'mouseenter:h1': this.onHeaderHover,
		};
	}
	onButtonClick(): void {
		console.log('button clicked', this);
	}
	//By purpose for demonstration I created onHeaderHover to be a property arrow function
	//Notice the difference in the value of this
	onHeaderHover: () => void = () => {
		console.log('header hovered: ', this);
	};

	template(): string {
		return `
            <div>
                <h1>User Form</h1>
                <div>User Name: ${this.model.get('name')}</div>
                <input/>
                <button>Click Me!</button>
            </div>

        `;
	}
	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();
		for (let eventKey in eventsMap) {
			const [eventName, selector] = eventKey.split(':');
			fragment.querySelectorAll(selector).forEach(element => {
				element.addEventListener(eventName, eventsMap[eventKey]);
			});
		}
	}
	render(): void {
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);
		this.parent.append(templateElement.content);
	}
}
