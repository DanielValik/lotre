import { defineConfig } from "eslint-define-config";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

export default defineConfig({
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      window: "readonly",
      document: "readonly",
      console: "readonly",
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: {
    react: eslintPluginReact,
    "react-hooks": eslintPluginReactHooks,
  },
  rules: {
    "no-console": "warn",
    "no-unused-vars": [
      "warn",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "warn",
  },
});
