import { Linter } from "eslint";
import jsdoc from "eslint-plugin-jsdoc";
import { prefix } from "../utils/prefix.js";

/** @type {Linter.RulesRecord} */
const all = {
  "no-types": "off",
};

export function jsdocConfig() {
  return [
    jsdoc.configs["flat/contents-typescript-flavor-error"],
    jsdoc.configs["flat/logical-typescript-flavor-error"],
    jsdoc.configs["flat/stylistic-typescript-flavor-error"],
    { rules: prefix(all, "jsdoc") },
  ];
}
