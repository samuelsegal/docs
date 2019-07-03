import fs from 'fs';

export abstract class CsvFileReader<T> {
	data: T[] = [];
	//convert row to type of ROW
	abstract mapRow(row: string[]): T;

	constructor(public filename: string) {}
	read(): void {
		this.data = fs
			.readFileSync(this.filename, {
				encoding: 'utf-8',
			})
			//split rows to a string []
			.split('\n')
			.map(
				//split string row to an array of strings
				(row: string): string[] => {
					return row.split(',');
				}
			)
			.map(this.mapRow);
	}
}
