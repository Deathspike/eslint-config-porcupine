import { Linter } from "eslint";
import perfectionist from "eslint-plugin-perfectionist";

/** @type {Linter.RulesRecord} */
const all = {};

/** @type {Linter.Config[]} */
export const perfectionistConfig = [
  perfectionist.configs["recommended-natural"],
  { rules: all },
];
