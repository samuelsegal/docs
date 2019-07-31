import { Comparable } from './Able';
export class Task implements Comparable {
	lessThen(val: any): boolean {
		return this.priority > val.priority;
	}
	gtrThen(val: any): boolean {
		return this.priority < val.priority;
	}
	constructor(public val: string, public priority: number) {}
}
