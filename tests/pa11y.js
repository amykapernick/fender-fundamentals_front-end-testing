const pa11y = require('pa11y'),
puppeteer = require('puppeteer-core'),
fs = require('file-system')

const runTest = async () => {
	// Ignore this variable
	const browser = await puppeteer.launch({
		ignoreHTTPSErrors: true,
		executablePath: '/c/Program Files (x86)/Google/Chrome/Application/chrome.exe',
		args: ['--no-sandbox'],
	}) // Ignore this Variable ^

	const results = await Promise.all([
		// Test Homepage
		pa11y(`http://localhost:54483/`, {
			browser: browser, // Ignore this line
			standard: 'WCAG2AAA',
			screenCapture: `${__dirname}/results/blog_home_desktop.png`
		}),
		// Test Homepage mobile
		pa11y(`http://localhost:54483/`, {
			browser: browser, // Ignore this line
			standard: 'WCAG2AAA',
			screenCapture: `${__dirname}/results/blog_home_mobile.png`,
			viewport: {
				width: 320,
				height: 480,
			}
		}),
		// Test Blog Post Code
		pa11y(`http://localhost:54483/generating-ssl-certificates/`, {
			browser: browser, // Ignore this line
			standard: 'WCAG2AAA',
			screenCapture: `${__dirname}/results/blog_post_code.png`
		}),
		// Test Blog Post Images
		pa11y(`http://localhost:54483/fixing-spam-on-wordpress/`, {
			browser: browser, // Ignore this line
			standard: 'WCAG2AAA',
			screenCapture: `${__dirname}/results/blog_post_images.png`
		}),
	]).catch(err => console.log(err))

	// console.log(results)
	fs.writeFile(`tests/results/pa11y.json`, JSON.stringify(results), err => console.log(err))

	browser.close() // Ignore This
}

runTest()