export const log = msg => {
	console.log(`${Date.now()} : ${msg}`);
};
export const logBlue = msg => {
	console.log('\x1b[34m%s\x1b[0m', msg);
};
