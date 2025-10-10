import { Linter } from "eslint";
import { prefix } from "../utils/prefix.js";
import tseslint from "typescript-eslint";

/** @type {Linter.RulesRecord} */
const all = {
  "explicit-function-return-type": "off",
  "explicit-member-accessibility": "off",
  "explicit-module-boundary-types": "off",
  "member-ordering": ["error", { default: { order: "alphabetically" } }],
  "naming-convention": "off",
  "no-magic-numbers": "off",
  "no-use-before-define": ["error", { functions: false }],
};

/** @type {Linter.RulesRecord} */
const js = {
  "prefer-readonly": "off",
  "prefer-readonly-parameter-types": "off",
};

export function tscConfig() {
  return [
    tseslint.configs.all,
    { rules: prefix(all, "@typescript-eslint") },
    { files: ["**/*.{js,jsx}"], rules: prefix(js, "@typescript-eslint") },
    { languageOptions: { parserOptions: { projectService: true } } },
  ];
}
