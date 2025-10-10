import { Linter } from "eslint";
import eslint from "@eslint/js";

/** @type {Linter.RulesRecord} */
const all = {
  "func-style": ["error", "declaration"],
  "max-statements": "off",
  "no-await-in-loop": "off",
  "no-console": "off",
  "no-magic-numbers": "off",
  "no-ternary": "off",
  "no-undefined": "off",
  "no-use-before-define": "off",
  "one-var": "off",
};

export function eslintConfig() {
  return [eslint.configs.all, { rules: all }];
}
