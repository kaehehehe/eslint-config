# @kaehehehe/eslint-config

Stop wasting time wiring up ESLint and Prettier from scratch.  
Drop in this config and start coding with clean, consistent style — instantly.

An all-in-one ESLint Flat Config for React + TypeScript projects, including Prettier, import sorting, unused import cleanup, and more.

### 🚀 Installation

Install with your preferred package manager:

```bash
npm install -D \
  @kaehehehe/eslint-config@latest \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-prettier \
  eslint-plugin-import-x \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-react-refresh \
  eslint-plugin-unused-imports \
  prettier
```

```bash
yarn add -D \
  @kaehehehe/eslint-config@latest \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-prettier \
  eslint-plugin-import-x \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-react-refresh \
  eslint-plugin-unused-imports \
  prettier
```

```bash
pnpm add -D \
  @kaehehehe/eslint-config@latest \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-prettier \
  eslint-plugin-import-x \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-react-refresh \
  eslint-plugin-unused-imports \
  prettier
```

### 🛠️ Usage

ESLint config (`eslint.config.mjs`)
```js
import kaeConfig from "@kaehehehe/eslint-config";

const eslintConfig = [...kaeConfig];

export default eslintConfig;

```

Prettier config (`prettier.json`)

```json
{
  "semi": true,
  "trailingComma": "all",
  "printWidth": 80,
  "useTabs": false,
  "tabWidth": 2,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "arrowParens": "always",
  "singleQuote": true
}

```

VSCode settings (`.vscode/settings.json`)

```json
{
  "eslint.workingDirectories": [
    {
      "mode": "auto"
    }
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.useFlatConfig": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,

```

NPM Scripts (`package.json`)

```json
  "scripts": {
    "lint:fix": "eslint \"src/**/*.{ts,tsx}\" --fix",
  },
```

### 📄 License

MIT © Kae(kaehehehe)
