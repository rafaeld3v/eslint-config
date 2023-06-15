![rafaeld3v](./logo.svg)

# ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies

```
npm i -D eslint @rafaeld3v/eslint-config
```

```
yarn add -D eslint @rafaeld3v/eslint-config
```

2. Create a `.eslintrc.json` file extending the config:

```
{
  "extends": "@rafaeld3v/eslint-config/react"
  // "extends": "@rafaeld3v/eslint-config/node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
