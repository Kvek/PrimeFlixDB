module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-empty": [2, "always"],
    "footer-empty": [2, "always"],
    "scope-empty": [2, "always"],
    "subject-full-stop": [2, "never", "."],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "revert",
        "refactor",
        "style",
        "config",
        "perf",
        "test",
      ],
    ],
  },
};
