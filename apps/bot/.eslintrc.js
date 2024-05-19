const { ModuleDetectionKind } = require("typescript")

/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ["@repo/eslint-config/server.js", "eslint:recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
        "ecmaVersion": 2021
    },
    "rules": {
        "no-console": 0,
    }
}