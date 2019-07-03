import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from '../utils';
import { MatchResult } from '../MatchResults';

type FOOTBALL_MATCH_ROW = [Date, string, string, number, number, MatchResult, string];

export class FootballMatchReader extends CsvFileReader<FOOTBALL_MATCH_ROW> {
	//convert row to type of ROW
	mapRow(row: string[]): FOOTBALL_MATCH_ROW {
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
}
