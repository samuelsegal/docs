const COLOR = {};
COLOR.Line = '%s\x1b[0m';
Reset = '\x1b[0m';
Bright = '\x1b[1m';
Dim = '\x1b[2m';
Underscore = '\x1b[4m';
Blink = '\x1b[5m';
Reverse = '\x1b[7m';
Hidden = '\x1b[8m';

COLOR.FgBlack = '\x1b[30m';
COLOR.FgRed = '\x1b[31m';
COLOR.FgGreen = '\x1b[32m';
COLOR.FgYellow = '\x1b[33m';
COLOR.FgBlue = '\x1b[34m';
COLOR.FgMagenta = '\x1b[35m';
COLOR.FgCyan = '\x1b[36m';
COLOR.FgWhite = '\x1b[37m';

COLOR.BgBlack = '\x1b[40m';
COLOR.BgRed = '\x1b[41m';
COLOR.BgGreen = '\x1b[42m';
COLOR.BgYellow = '\x1b[43m';
COLOR.BgBlue = '\x1b[44m';
COLOR.BgMagenta = '\x1b[45m';
COLOR.BgCyan = '\x1b[46m';
COLOR.BgWhite = '\x1b[47m';
const log = msg => {
	console.log(msg);
};
const clog = (COLOR, msg) => {
	console.log(COLOR + this.COLOR.Line, msg);
};

exports.COLOR = COLOR;
exports.log = log;
exports.clog = clog;
