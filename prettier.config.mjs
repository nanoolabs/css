/** @type {import("prettier").Config} */
export default {
	printWidth: 100,
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			files: ['*.md'],
			options: {
				useTabs: false,
			},
		},
	],
}
