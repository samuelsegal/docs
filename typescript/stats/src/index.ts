import { MatchResult } from './MatchResults';
import { FootballMatchReader } from './FootballMatchReader';

const reader = new FootballMatchReader('football.csv');
reader.read();
console.log(reader.data[0]);

let manUnitedWins = 0;

for (let match of reader.data) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
}

console.log(`Man United wins ${manUnitedWins} games`);
