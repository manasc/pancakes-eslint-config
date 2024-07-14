import config from '../.eslintrc.json' assert { type: "json" };

/** @type {import("eslint").Linter.BaseConfig} */
export default {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: "xo",
	rules: {
		"no-alert": "off",
		"capitalized-comments": "off"
	},
	overrides: [
		{
			files: ['*.tsx', '*.js', '*.jsx'],
			extends: ["xo-react"],
			rules: {
				"react/prop-types": "off",
				"react/react-in-jsx-scope": "off",
				"react/jsx-no-constructed-context-values": "off"
			}
		},
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			extends: ["xo-typescript"],
			rules: {
				"no-alert": "off",
				"capitalized-comments": "off",
				"@typescript-eslint/naming-convention": "off",
				"@typescript-eslint/ban-types": "off"
			}
		},
	]
}
