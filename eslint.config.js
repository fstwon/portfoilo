import react from "eslint-plugin-react"
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: [
      "**/*.{js,mjs,cjs,ts,jsx,tsx}"
    ],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error"
    },
    plugins: [
      react,
      tseslint
    ],
    extends: ["eslint:all", "plugin:react/all"]
  },
  { 
    languageOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      parserOptions: { 
        ecmaFeatures: { 
          jsx: true 
        } 
      } 
    }, 
  },
  {
    languageOptions: { 
      globals: globals.browser 
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];