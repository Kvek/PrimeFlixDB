async function config() {
  try {
    const { execSync } = require("child_process");

    const chalk = await import("chalk");

    const redError = chalk.default.red;

    const ALLOWED_BRANCH_NAMES = [
      "main",
      "develop",
      "release",
      "hotfix",
      "masin",
    ];

    const FORMATS = [
      {
        description: "Used only for developing new features",
        example: "feature/FLX-01-new-login-page",
        type: "feature",
      },
      {
        description: "Used only for fixing bugs",
        example: "bugfix/FLX-01-fix-header-typo",
        type: "bugfix",
      },
      {
        description: "Used only for fixing critical bugs in production",
        example: "hotfix/FLX-01-critical-security-issue",
        type: "hotfix",
      },
      {
        description: "Used only for updating documentation",
        example: "docs/FLX-01-update-api-endpoints-docs",
        type: "docs",
      },
      {
        description: "Used only for undoing previously commited changes",
        example: "revert/FLX-01-undo-logging-functionality",
        type: "revert",
      },
      {
        description: "Used only for code refactoring",
        example: "refactor/FLX-01-remove-dead-code",
        type: "refactor",
      },
      {
        description: "Used only for updating styles",
        example: "style/FLX-01-add-new-border",
        type: "style",
      },
      {
        description: "Used only for updating config files",
        example: "config/FLX-01-add-new-eslint-rule",
        type: "config",
      },
      {
        description: "Used only for adding tests",
        example: "test/FLX-01-add-function-tests",
        type: "test",
      },
    ];

    const VALID_PATTERN =
      /^(feature|bugfix|hotfix|docs|revert|refactor|style|config|test)\/[A-Z]+-[0-9]+-[a-z0-9-]+$/;

    const BRANCH_NAME = execSync("git branch --show-current").toString().trim();

    if (!ALLOWED_BRANCH_NAMES.includes(BRANCH_NAME)) {
      if (!BRANCH_NAME) {
        console.error(redError(`\n ❌ No branch found`));
        process.exit(1);
      }

      if (!VALID_PATTERN.test(BRANCH_NAME)) {
        console.error(redError(`\n ❌ Invalid branch name: ${BRANCH_NAME}.`));
        console.error(
          redError(
            `\n ⚠️  Please check you branch name and update accordingly using the table below`,
          ),
        );

        console.error(redError(`\n ⚠️  Could not push to remote.`));
        console.table(FORMATS);

        process.exit(1);
      }
    } else {
      process.exit(0);
    }
  } catch (error) {
    console.error("Failed to dynamically import Chalk:", error);
    process.exit(0);
  }
}

config();
