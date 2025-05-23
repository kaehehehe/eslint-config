# Usage

### 🚀 Installation

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


### 🛠️ Configuration

eslint.config.mjs
```js
import kaeConfig from "@kaehehehe/eslint-config";

const eslintConfig = [...kaeConfig];

export default eslintConfig;

```

prettier.json
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

.vscode > settings.json

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
