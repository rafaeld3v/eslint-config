![rafaeld3v](./logo.svg)

# ESLint config

## What's included? 🔧

- 🔑 Standard config base
- ⚛️ React plugin
- 🪝 React Hooks plugin
- 🧑‍💻 JSX a11y plugin
- 🎨 Prettier

## Setup 🚀

### React Native 📱
Install dependencies:
```
npm i -D eslint @rafaeld3v/eslint-config
```
Inside .eslintrc.json
```
{
  "extends": [
    "@rafaeld3v/eslint-config/react-native", 
  ]
}

### React (with Next.js) ⚡️
Install dependencies:
```
npm i -D eslint @rafaeld3v/eslint-config
```
Inside .eslintrc.json
```
{
  "extends": [
    "@rafaeld3v/eslint-config/next", 
    "next/core-web-vitals"
  ]
}
```

### React (without Next.js) ⚛️
Install dependencies:
```
npm i -D eslint @rafaeld3v/eslint-config
```
Inside .eslintrc.json
```
{
  "extends": "@rafaeld3v/eslint-config/react"
}
```

### Node.js 🖧
Install dependencies:
```
npm i -D eslint @rafaeld3v/eslint-config
```
Inside .eslintrc.json
```
{
  "extends": "@rafaeld3v/eslint-config/node"
}
```

### 🎉 License
MIT License © rafaeld3v
