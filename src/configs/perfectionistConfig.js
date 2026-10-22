import { Linter } from "eslint";
import perfectionist from "eslint-plugin-perfectionist";

import { withRulePrefix } from "./utils/withRulePrefix.js";

const all = withRulePrefix("perfectionist", {});

/** @type {Linter.Config[]} */
export const perfectionistConfig = [
  perfectionist.configs["recommended-natural"],
  { rules: all },
];
