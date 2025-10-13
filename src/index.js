import { Linter } from "eslint";
import prettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";

import { eslintConfig } from "./configs/eslintConfig.js";
import { typescriptConfig } from "./configs/typescriptConfig.js";
import { unicornConfig } from "./configs/unicornConfig.js";

/** @returns {Linter.Config[]} */
export function porcupine() {
  return [
    ...eslintConfig(),
    ...typescriptConfig(),
    ...unicornConfig(),
    perfectionist.configs["recommended-natural"],
    prettier,
  ];
}
