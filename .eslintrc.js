module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard", "plugin:import/warnings"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "comma-dangle": 0,
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "max-len": [
      "error",
      100,
      {
        ignoreStrings: true,
      },
    ],
    "no-alert": "off",
    "no-console": "off",
    "no-debugger": "error",
    "no-param-reassign": "off",
    "import/prefer-default-export": "off",
    "max-classes-per-file": ["error", 2],
    "no-restricted-exports": "off",
    "import/no-unused-modules": "error",
    "space-before-function-paren": 0,
  },
};
