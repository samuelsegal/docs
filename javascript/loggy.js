const bgblue = msg => {
	console.log('\x1b[44m%s\x1b[0m', msg);
};
const log = msg => {
	console.log(msg);
};
exports.bgblue = bgblue;
exports.log = log;
