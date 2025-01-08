module.exports = {
	root: true,
	env: {
		es2021: true,
		node: true,
		jest: true,
		"react-native/react-native": true,
	},
	extends: [
		"@react-native",
		"plugin:@tanstack/eslint-plugin-query/recommended",
		"plugin:prettier/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: [
		"react-native",
		"@tanstack/query",
		"@typescript-eslint",
	],
	rules: {
		"arrow-parens": ["error", "as-needed"],
		"brace-style": ["error", "1tbs", { allowSingleLine: true }],
		"quote-props": ["error", "as-needed"],
		"comma-dangle": ["error", "always-multiline"],
		"react-native/no-inline-styles": "off",
		quotes: ["error", "double", { avoidEscape: true }],
		"prettier/prettier": [
			"error",
			{
				semi: true,
				tabWidth: 2,
				printWidth: 80,
				singleQuote: false,
				endOfLine: "auto",
				trailingComma: "all",
				arrowParens: "avoid",
				bracketSameLine: true,
				bracketSpacing: true,
			},
		],
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			rules: {
				"import/order": [
					"error",
					{
						groups: ["external", "builtin", "internal", "parent", "sibling"],
						pathGroups: [
							{
								pattern: "react+(|-native)",
								group: "external",
								position: "before",
							},
							{
								pattern: "@+(routes|screens|components|hooks|theme)",
								group: "internal",
								position: "before",
							},
							{
								pattern: "./",
								group: "internal",
								position: "before",
							},
						],
						pathGroupsExcludedImportTypes: ["react+(|-native)"],
						alphabetize: {
							order: "asc",
							caseInsensitive: true,
						},
						"newlines-between": "always",
					},
				],
			},
		},
	],
};
