import eslint from "@eslint/js";
import { Linter } from "eslint";
import prettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";

import { jsdocConfig } from "./configs/jsdocConfig.js";
import { typescriptConfig } from "./configs/typescriptConfig.js";
import { unicornConfig } from "./configs/unicornConfig.js";

/** @returns {Linter.Config[]} */
export function porcupine() {
  return [
    eslint.configs.recommended,
    ...jsdocConfig(),
    ...typescriptConfig(),
    ...unicornConfig(),
    perfectionist.configs["recommended-natural"],
    prettier,
  ];
}
