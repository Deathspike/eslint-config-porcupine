import { Linter } from "eslint";
import tseslint from "typescript-eslint";

/** @type {Linter.RulesRecord} */
const all = {
  "@typescript-eslint/no-unused-vars": "off",
};

/** @type {Linter.RulesRecord} */
const js = {
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
};

/** @type {Linter.Config[]} */
export const typescriptConfig = [
  ...tseslint.configs.strictTypeChecked,
  { files: ["**/*.{cjs,js,jsx,mjs}"], rules: js },
  { languageOptions: { parserOptions: { projectService: true } } },
  { rules: all },
];
