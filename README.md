# eslint-config-porcupine

> Sharp opinions. Pointy rules. Touch at your own risk.

_Porcupine_ is an **opinionated ESLint configuration** that rules with quiet authority — and a lot of spikes. It doesn't ask for your input; it already knows what's best. You're welcome to become a **vassal state** — just understand that you'll be governed by a **monarchy**, not a democracy. Your opinions will be heard, logged, and promptly ignored.

_Porcupine_ assumes _Prettier_ already disciplines your code's formatting, leaving it free to focus on what actually matters: **readability, correctness, and the prevention of code crimes**. It builds upon well-behaved defaults, **assumes type awareness** as law, and abolishes redundant rules that the type system already enforces. Its plugins sharpen the edges, catching the mistakes you _swear_ you didn't make.

## ✨ Sacred Edicts

- **Zero Formatting**: _Porcupine_ doesn't do fashion advice — that's _Prettier's_ domain.
- **Readability & Correctness**: _Porcupine_ enforces clarity, sanity, and a modicum of self-respect.
- **Type Supremacy**: _Porcupine_ governs only in lands blessed with types — _JSDoc_ or _TypeScript_.
- **Sacred Orders**: _Porcupine_ delegates enforcement to a circle of trusted plugins.

## 🏰 Becoming a Vassal State

Swear fealty to _Porcupine_ and receive its spiny protection:

```bash
npm install --save-dev eslint eslint-config-porcupine
```

Once the pact is sealed, add _Porcupine's_ governance in your `eslint.config.js`:

```js
import { porcupine } from "eslint-config-porcupine";
import { defineConfig } from "eslint/config";

export default defineConfig(porcupine());
```

## 💎 Offerings to the Porcupine

_Porcupine_ accepts no decrees, proposals, or revolutions — its laws are immutable. Only reports of genuine **bugs or pleas for assistance** in deciphering its will shall be entertained. All other offerings will be ceremoniously ignored while _Porcupine_ resumes its quiet, judgmental watch.
