const pa11y = require(`pa11y`),
	fs = require(`file-system`);

const runTest = async () => {
	const results = await Promise.all([
		pa11y(`http://localhost:1234/week`, {
			standard: `WCAG2AAA`,
			screenCapture: `./tests/results/weekly.png`,
			timeout: 10000
		}),
		// pa11y(`http://localhost:1234/month`, {
		// 	standard: `WCAG2AAA`,
		// 	screenCapture: `./tests/results/monthly.png`,
		// }),
		// pa11y(`http://localhost:1234`, {
		// 	standard: `WCAG2AAA`,
		// 	screenCapture: `./tests/results/home.png`,
		// 	viewport: {
		// 		width: 1280,
		// 		height: 1024,
		// 	},
		// }),
	]).catch((err) => console.log(err));

	console.log(results);

	fs.writeFile(`tests/results/pa11y.json`, JSON.stringify(results), (err) => {
		console.log(err);
	});
};

runTest();
