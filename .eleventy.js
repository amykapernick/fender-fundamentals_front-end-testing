const { DateTime } = require('luxon')

module.exports = function(eleventyConfig) {
	// Date formatting (human readable)
	eleventyConfig.addFilter('readableDate', dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat('dd LLL yyyy')
	})

	// Date formatting (machine readable)
	eleventyConfig.addFilter('machineDate', dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd')
	})

	// Don't process folders with static assets e.g. images
	eleventyConfig.addPassthroughCopy('img')
	eleventyConfig.addPassthroughCopy('fonts')
	eleventyConfig.addPassthroughCopy('css')

	/* Markdown Plugins */
	let markdownIt = require('markdown-it')
	let markdownItAnchor = require('markdown-it-anchor')
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	}
	let opts = {
		permalink: false,
	}

	eleventyConfig.setLibrary('md', markdownIt(options).use(markdownItAnchor, opts))

	return {
		templateFormats: ['md', 'njk', 'html', 'liquid', 'css', 'html'],

		// If your site lives in a different subdirectory, change this.
		// Leading or trailing slashes are all normalized away, so don’t worry about it.
		// If you don’t have a subdirectory, use "" or "/" (they do the same thing)
		// This is only used for URLs (it does not affect your file structure)
		pathPrefix: '/',

		markdownTemplateEngine: 'liquid',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		passthroughFileCopy: true,
	}
}
