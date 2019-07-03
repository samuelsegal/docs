import { FOOTBALL_ROW_TYPE } from './MatchData';

export interface Analyzer {
	run(matches: FOOTBALL_ROW_TYPE[]): string;
}
export interface OutputTarget {
	print(report: string): void;
}
export class Summary {
	constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
	buildAndPrintReport(matches: FOOTBALL_ROW_TYPE[]): void {
		const report = this.analyzer.run(matches);
		this.outputTarget.print(report);
	}
}
