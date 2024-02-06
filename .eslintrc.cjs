module.exports = {
  extends: ["eslint:recommended", "next/core-web-vitals", "prettier"],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
      ],
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          { accessibility: "no-public" },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            format: ["PascalCase"],
            modifiers: ["exported"],
            selector: ["typeAlias"],
            suffix: ["Type"],
          },
          {
            format: ["PascalCase"],
            modifiers: ["exported"],
            selector: ["interface"],
            suffix: ["Interface"],
          },
          {
            format: ["PascalCase"],
            modifiers: ["exported"],
            selector: ["enum"],
            suffix: ["Enum"],
          },
          {
            format: ["UPPER_CASE", "PascalCase", "camelCase"],
            modifiers: ["const"],
            selector: "variable",
          },
          {
            format: ["camelCase"],
            selector: ["function"],
          },
        ],
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-useless-empty-export": "error",
        "@typescript-eslint/padding-line-between-statements": [
          "error",
          {
            blankLine: "always",
            next: ["interface", "type"],
            prev: "*",
          },
        ],
        "@typescript-eslint/prefer-destructuring": "error",
        "@typescript-eslint/require-array-sort-compare": [
          "error",
          { ignoreStringArrays: true },
        ],
        "@typescript-eslint/sort-type-constituents": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-sort-props": [
          "error",
          {
            shorthandFirst: true,
          },
        ],
        "react/no-unused-prop-types": "error",
        "react/self-closing-comp": "error",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "import",
    "sort-keys",
    "simple-import-sort",
    "simple-import-sort",
    "sort-destructure-keys",
    "@typescript-eslint",
  ],
  root: true,
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "block-scoped-var": "error",
    "default-param-last": "off",
    eqeqeq: ["error", "smart"],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "no-use-before-define": "off",
    "no-useless-return": "error",
    "padding-line-between-statements": "off",
    "prefer-destructuring": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Core functionalities or base layers (e.g. store, utils, types)
          ["^(?!@)"],
          ["^@redux"],
          ["^@store"],
          ["^@types"],
          ["^@utils"],
          // UI-related functionalities (e.g., components)
          ["^@components"],
          // Higher-order structures or wrappers (e.g. providers, app, containers, wrappers)
          ["^@app"],
          ["^@containers"],
          ["^@providers"],
          ["^@wrappers"],
          // Everything else (e.g. css)
          ["^@"],
          ["^"],
          ["^\\."],
        ],
      },
    ],
    "sort-destructure-keys/sort-destructure-keys": [2, { caseSensitive: true }],
    "sort-keys": 0,
    "sort-keys/sort-keys-fix": 1,
    "sort-vars": "error",
  },
};
