import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "astro/no-set-html-directive": "error",
      "astro/no-unsafe-inline-scripts": "error",
      "astro/no-set-text-directive": "error",
      "astro/no-unused-css-selector": "warn",
    },
  },
];
