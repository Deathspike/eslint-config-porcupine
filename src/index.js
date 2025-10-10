import { eslintConfig } from "./configs/eslintConfig.js";
import { jsdocConfig } from "./configs/jsdocConfig.js";
import { tscConfig } from "./configs/tscConfig.js";

export function porcupine() {
  return [...eslintConfig(), ...jsdocConfig(), ...tscConfig()];
}
