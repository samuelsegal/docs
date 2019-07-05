import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResults';
import { FOOTBALL_ROW_TYPE } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
	read(): void;
	data: string[][];
}
export class FootballMatchReader {
	//convenient builder method for cvs files
	static fromCsv(fileName: string): FootballMatchReader {
		return new FootballMatchReader(new CsvFileReader(fileName));
	}
	matches: FOOTBALL_ROW_TYPE[] = [];
	constructor(public reader: DataReader) {}
	load(): void {
		this.reader.read();
		this.matches = this.reader.data.map(
			(row: string[]): FOOTBALL_ROW_TYPE => {
				return [
					dateStringToDate(row[0]),
					row[1],
					row[2],
					parseInt(row[3]),
					parseInt(row[4]),
					row[5] as MatchResult,
					row[6],
				];
			}
		);
	}
}
