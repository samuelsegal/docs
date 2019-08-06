import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
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
	mapRegions(fragment: DocumentFragment) {}
	render(): void {
		this.parent.innerHTML = '';
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);
		this.mapRegions(templateElement.content);
		this.parent.append(templateElement.content);
	}

	abstract template(): string;
}
