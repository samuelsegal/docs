import { Direction } from './Direction';
export interface Sort {
	arr: any[];
	sort(direction: Direction): void;
}
