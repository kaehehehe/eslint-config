import js from "@eslint/js";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import importXPlugin from "eslint-plugin-import-x";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

const baseConfig = [
  {
    ignores: ["**/dist/**", "**/build/**", "**/node_modules/**"],
  },

  js.configs.recommended,
  tseslintPlugin.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
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

  prettierConfig,
];

export default baseConfig;
