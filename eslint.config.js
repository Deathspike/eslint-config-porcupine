import { defineConfig } from "eslint/config";
import globals from "globals";

import { porcupine } from "./src/index.js";

export default defineConfig([
  ...porcupine(),
  { languageOptions: { globals: { ...globals.node } } },
]);
