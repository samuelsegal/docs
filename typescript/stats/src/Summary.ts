import { FOOTBALL_ROW_TYPE } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
	run(matches: FOOTBALL_ROW_TYPE[]): string;
}
export interface OutputTarget {
	print(report: string): void;
}
export class Summary {
	//static builder method =- good for common reports
	static winsAnalysisHtmlReport(team: string, fileName: string): Summary {
		return new Summary(new WinsAnalysis(team), new HtmlReport(fileName));
	}
	constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
	buildAndPrintReport(matches: FOOTBALL_ROW_TYPE[]): void {
		const report = this.analyzer.run(matches);
		this.outputTarget.print(report);
	}
}
