module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    semi: ["error", "always"],
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
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
  },
};
