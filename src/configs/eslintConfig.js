import eslint from "@eslint/js";
import { Linter } from "eslint";

/** @type {Linter.RulesRecord} */
const all = {
  "no-undef": "off",
};

export function eslintConfig() {
  return [eslint.configs.recommended, { rules: all }];
}
