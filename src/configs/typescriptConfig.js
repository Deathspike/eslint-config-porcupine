import { Linter } from "eslint";
import tseslint from "typescript-eslint";

import { withRulePrefix } from "./utils/withRulePrefix.js";

const all = withRulePrefix("@typescript-eslint", {
  "no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
  "no-unused-vars": "off",
});

const js = withRulePrefix("@typescript-eslint", {
  "no-unsafe-argument": "off",
  "no-unsafe-assignment": "off",
  "no-unsafe-member-access": "off",
});

/** @type {Linter.Config[]} */
export const typescriptConfig = [
  ...tseslint.configs.strictTypeChecked,
  { files: ["**/*.{cjs,js,jsx,mjs}"], rules: js },
  { languageOptions: { parserOptions: { projectService: true } } },
  { rules: all },
];
