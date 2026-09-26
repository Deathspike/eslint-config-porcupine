import eslint from "@eslint/js";
import { Linter } from "eslint";

/** @type {Linter.RulesRecord} */
const all = {
  eqeqeq: "error", // possibly default in v11
  "no-undef": "off",
};

/** @type {Linter.Config[]} */
export const coreConfig = [eslint.configs.recommended, { rules: all }];
