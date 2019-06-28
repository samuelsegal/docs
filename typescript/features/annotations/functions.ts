//When to use annotations
//User for the return unlike  below but like below the below
const add = (a: number, b: number) => {
	return a + b;
};
const subtract = (a: number, b: number): number => {
	return a - b;
};

function divide(a: number, b: number): number {
	return a / b;
}
const multiply = function(a: number, b: number): number {
	return a * b;
};

const logger = (msg: string): void => {
	console.log(msg);
};
//never compared to void
const throwError = (msg: string): never => {
	throw new Error(msg);
};
const maybeThrowError = (msg: string): void => {
	if (!msg) {
		throw new Error(msg);
	}
};

const forecast = {
	date: new Date(),
	weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
};
const logWeatherDestructuring = ({ date, weather }: { date: Date; weather: string }): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
};

logWeather(forecast);

logWeatherDestructuring(forecast);
