import { Linter } from "eslint";

/**
 * @param {Linter.RulesRecord} rules
 * @param {string} name
 */
export function prefix(rules, name) {
  return Object.fromEntries(
    Object.entries(rules).map(([rule, entry]) => [`${name}/${rule}`, entry]),
  );
}
