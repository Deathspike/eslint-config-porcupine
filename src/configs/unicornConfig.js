import { Linter } from "eslint";
import unicorn from "eslint-plugin-unicorn";

import { withRulePrefix } from "./utils/withRulePrefix.js";

const all = withRulePrefix("unicorn", {
  "no-top-level-side-effects": "off", // possibly disabled in v79
  "prefer-await": "off",
});

/** @type {Linter.Config[]} */
export const unicornConfig = [unicorn.configs.unopinionated, { rules: all }];
