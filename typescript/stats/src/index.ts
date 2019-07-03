import { MatchResult } from './MatchResults';
import { FootballMatchReader } from './FootballMatchReader';
import { CsvFileReader } from './CsvFileReader';
// import { FootballMatchReader } from './inheritance/FootballMatchReader';
// import { CsvFileReader } from './inheritance/CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

//Using Composition style
//Create an implementation of the DataReader interface from MatchReader
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pawss in the DataReader created above
const matchReader = new FootballMatchReader(csvFileReader);
matchReader.load();

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

/*
 * To demostrate composition we have a Summary class. It accepts an Analyzer and OuputTarget
 * Below we create 2 Summaries, One is a simply logs report to console, the other saves it to an html file
 */
const summaryConsole = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
summaryConsole.buildAndPrintReport(matchReader.matches);

const summaryHtml = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
summaryHtml.buildAndPrintReport(matchReader.matches);
