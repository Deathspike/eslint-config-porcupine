import { Linter } from "eslint";
import unicorn from "eslint-plugin-unicorn";

import { unicornFilenameCase } from "./rules/unicornFilenameCase.js";

/** @type {Linter.RulesRecord} */
const all = {
  "unicorn/filename-case": ["error", unicornFilenameCase],
  "unicorn/no-array-callback-reference": "off",
};

export function unicornConfig() {
  return [unicorn.configs.recommended, { rules: all }];
}
