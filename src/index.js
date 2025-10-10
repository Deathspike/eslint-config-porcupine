import { Linter } from "eslint";
import { eslintConfig } from "./configs/eslintConfig.js";
import { jsdocConfig } from "./configs/jsdocConfig.js";
import prettier from "eslint-config-prettier";
import { tscConfig } from "./configs/tscConfig.js";

/** @returns {Linter.Config[]} */
export function porcupine() {
  return [...eslintConfig(), ...jsdocConfig(), ...tscConfig(), prettier];
}
