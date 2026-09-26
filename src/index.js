import { Linter } from "eslint";
import prettier from "eslint-config-prettier";

import { coreConfig } from "./configs/coreConfig.js";
import { perfectionistConfig } from "./configs/perfectionistConfig.js";
import { typescriptConfig } from "./configs/typescriptConfig.js";
import { unicornConfig } from "./configs/unicornConfig.js";

/** @returns {Linter.Config[]} */
export function porcupine() {
  return [
    ...coreConfig,
    ...perfectionistConfig,
    ...typescriptConfig,
    ...unicornConfig,
    prettier,
  ];
}
