import { Model } from '../models/Model';
/**
 * Abstract View which is of type Model<K>
 */
export abstract class View<T extends Model<K>, K> {
	/**
	 * regions property. Used for templating or View Nesting
	 */
	regions: { [key: string]: Element } = {};
	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}
	regionsMap(): { [key: string]: string } {
		return {};
	}
	/**
	 * eventsMap - default as some compnents may not need to map events
	 */
	eventsMap(): { [key: string]: () => void } {
		return {};
	}
	bindModel(): void {
		this.model.on('change', () => {
			this.render();
		});
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
	mapRegions(fragment: DocumentFragment) {
		const regionsMap = this.regionsMap();
		for (let key in regionsMap) {
			const selector = regionsMap[key];

			const element = fragment.querySelector(selector);
			if (element) {
				this.regions[key] = element;
			}
		}
	}
	render(): void {
		this.parent.innerHTML = '';
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);
		this.mapRegions(templateElement.content);
		this.onRender();
		this.parent.append(templateElement.content);
	}
	/**
	 * default method. Override this for view nesting
	 */
	onRender(): void {}

	abstract template(): string;
}
