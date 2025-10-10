import { Linter } from "eslint";
import tseslint from "typescript-eslint";

/** @type {Linter.RulesRecord} */
const all = {
  "@typescript-eslint/restrict-template-expressions": "off",
};

/** @type {Linter.RulesRecord} */
const js = {
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-unsafe-return": "off",
};

export function typescriptConfig() {
  return [
    ...tseslint.configs.recommendedTypeChecked,
    { rules: all },
    { files: ["**/*.{js,jsx}"], rules: js },
    { languageOptions: { parserOptions: { projectService: true } } },
  ];
}
