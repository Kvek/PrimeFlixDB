const path = require("path");

const buildEslintCommand = (filenames) => {
  const fileString = filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ");

  return `next lint --fix --file ${fileString}`;
};

module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "vitest related --run --passWithNoTests --typecheck.enabled",
    buildEslintCommand,
    "npx prettier --write",
  ],
};
