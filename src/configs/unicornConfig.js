import { Linter } from "eslint";
import unicorn from "eslint-plugin-unicorn";

/** @type {Linter.RulesRecord} */
const all = {
  "unicorn/prefer-await": "off",
};

/** @type {Linter.Config[]} */
export const unicornConfig = [unicorn.configs.unopinionated, { rules: all }];
