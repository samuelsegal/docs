import { MatchResult } from './MatchResults';
import { FootballMatchReader } from './FootballMatchReader';
import { CsvFileReader } from './CsvFileReader';
// import { FootballMatchReader } from './inheritance/FootballMatchReader';
// import { CsvFileReader } from './inheritance/CsvFileReader';

//Using composition
//Create an implementation of the DataReader interface from MatchReader
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pawss in the DataReader created above
const matchReader = new FootballMatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
}

// Using Inhneritance style
// const reader = new FootballMatchReader('football.csv');
// reader.read();
// console.log(reader.data[0]);

// let manUnitedWins = 0;

// for (let match of reader.data) {
// 	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
// 		manUnitedWins++;
// 	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
// 		manUnitedWins++;
// 	}
// }
console.log(`Man United wins ${manUnitedWins} games`);
