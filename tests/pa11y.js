const pa11y = require('pa11y')
const fs = require('file-system')

const runTest = async () => {
	const results = await Promise.all([
		pa11y(`http://localhost:8080/`)
	])

	fs.writeFile('tests/results/pa11y.json', JSON.stringify(results), err => {console.log(err)})

	// console.log(results)
}

runTest()
