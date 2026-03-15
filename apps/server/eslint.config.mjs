// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import prettierConfig from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  prettierConfig,
  {
    rules: {
      // catch unused variables except those prefixed with _
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
        },
      ],

      // force explicit return types on functions
      "@typescript-eslint/explicit-function-return-type": "warn",

      // no any — forces you to actually type things
      "@typescript-eslint/no-explicit-any": "error",

      // no console.log left in code (use a logger instead)
      "no-console": "warn",
    },
  }
);
