import { Linter } from "eslint";
import jsdoc from "eslint-plugin-jsdoc";

/** @type {Linter.RulesRecord} */
const js = {
  "jsdoc/no-types": "off",
};

export function jsdocConfig() {
  return [
    jsdoc.configs["flat/contents-typescript-flavor-error"],
    jsdoc.configs["flat/logical-typescript-flavor-error"],
    jsdoc.configs["flat/stylistic-typescript-flavor-error"],
    { files: ["**/*.{js,jsx}"], rules: js },
  ];
}
