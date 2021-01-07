module.exports = {
	plugins: [
		'stylelint-scss',
		'stylelint-order'
	],
	extends: ['stylelint-config-property-sort-order-smacss'],
	rules: { 
			'order/order': [
				'custom-properties',
				'declarations'
			],
			'function-calc-no-invalid': true,
			'no-empty-first-line': true,
			'no-missing-end-of-source-newline': true,
			'no-eol-whitespace': true,
			'max-empty-lines': 1,
			'indentation': [
				'tab', 
				{
					indentInsideParens: "once-at-root-twice-in-block"
				}
			],
			'comment-empty-line-before': 'always',
			'rule-empty-line-before': [
				'always', 
				{
					except: ['first-nested']
				}
			],
			'selector-attribute-quotes': 'always',
			'block-opening-brace-newline-after': 'always',
			'block-closing-brace-newline-before': 'always',
			'block-closing-brace-empty-line-before': 'never',
			'declaration-block-semicolon-newline-after': 'always',
			'unit-case': 'lower',
			'length-zero-no-unit': true,
			'string-quotes': 'single',
			'function-whitespace-after': 'always',
			'function-url-quotes': 'always',
			'function-comma-space-after': 'always',
			'color-hex-length': 'long',
			'color-hex-case': 'lower',
			'color-no-invalid-hex': true,
			'selector-max-empty-lines': 0,
			'selector-max-attribute': 3,
			'selector-combinator-blacklist': [],
			'declaration-no-important': true,
			'shorthand-property-no-redundant-values': true,
			'number-max-precision': 2,
			'function-url-no-scheme-relative': true,
			'color-named': 'never',
			'no-invalid-double-slash-comments': true,
			'no-extra-semicolons': true,
			'no-duplicate-selectors': true,
			'no-duplicate-at-import-rules': true,
			'no-descending-specificity': true,
			'comment-no-empty': true,
			'selector-type-no-unknown': true,
			'selector-pseudo-element-no-unknown': true,
			'selector-pseudo-class-no-unknown': true,
			'block-no-empty': true,
			'declaration-block-no-shorthand-property-overrides': true,
			'declaration-block-no-duplicate-properties': [true, {ignore: ["consecutive-duplicates"]}],
			'property-no-unknown': true,
			'unit-no-unknown': true,
			'string-no-newline': true,
			'function-calc-no-unspaced-operator': true,
		 }
}
