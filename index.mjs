import js from "@eslint/js";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin/dist/configs/recommended.js";
import importXPlugin from "eslint-plugin-import-x";

const baseConfig = [
  {
    ignores: ["**/dist/**", "**/build/**", "**/node_modules/**"],
  },

  js.configs.recommended,
  tseslint,

  {
    languageOptions: {
      globals: globals.browser,
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "unused-imports": unusedImports,
      "import-x": importXPlugin,
      "@typescript-eslint": tseslint.plugin,
      prettier: prettierPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-expressions": "warn",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "no-console": "warn",

      "import-x/order": [
        "warn",
        {
          groups: [
            "external",
            "builtin",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
            "type",
            "unknown",
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["@/**"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import-x/newline-after-import": "warn",
      "import-x/no-duplicates": "error",
      "prettier/prettier": "error",
    },
  },
];

export default baseConfig;
