import js from "@eslint/js";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import importXPlugin from "eslint-plugin-import-x";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";

const baseConfig = [
  {
    ignores: ["**/dist/**", "**/build/**", "**/node_modules/**"],
  },

  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "unused-imports": unusedImportsPlugin,
      "import-x": importXPlugin,
      "@typescript-eslint": tseslintPlugin,
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
          args: "none",
          argsIgnorePattern: "^_",
        },
      ],
      "no-console": "warn",
      "import-x/order": [
        "warn",
        {
          groups: [
            "reactGroup",
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type",
            "unknown",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "reactGroup",
            },
            {
              pattern: "react/**",
              group: "reactGroup",
            },
            {
              pattern: "react-dom",
              group: "reactGroup",
            },
            {
              pattern: "react-dom/**",
              group: "reactGroup",
            },

            {
              pattern: "@/**",
              group: "internal",
            },
          ],
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
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefreshPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react-refresh/only-export-components": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },
  prettierConfig,
];

export default baseConfig;
