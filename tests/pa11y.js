const pa11y = require(`pa11y`),
	puppeteer = require(`puppeteer-core`),
	fs = require(`file-system`),
	port = 33069,
	site = `http://localhost:${port}`,  
	html = require('pa11y-reporter-html');

const runTest = async () => {
const		results = await Promise.all([
		// Basic pa11y test with no options
			pa11y(site, {
				// browser,
				standard: `WCAG2AAA`,
				screenCapture: `./tests/results/pa11y_home_mobile.png`,
				viewport: {
					width: 320,
					height: 480,
					isMobile: true,
				},
			}).then(async res => {
				const htmlResults = await html.results(res)

				return htmlResults
			}),
		]).then(res => res).catch(err => console.log(err));		

	fs.writeFile(`tests/results/pa11y.html`, results[0], (err) => {
		console.log(err);
	});
};

runTest();