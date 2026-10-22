import { Linter } from "eslint";

/**
 * @param {string} prefix
 * @param {Linter.RulesRecord} rules
 * @returns {Linter.RulesRecord}
 */
export function withRulePrefix(prefix, rules) {
  return Object.fromEntries(
    Object.entries(rules).map(([name, entry]) => [`${prefix}/${name}`, entry]),
  );
}
