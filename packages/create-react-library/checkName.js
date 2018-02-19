const validateLibraryName = require("validate-npm-package-name");
const chalk = require("chalk");
const flatMap = require("array.prototype.flatmap");
const modules = require("react-library-scripts/modules");

function printValidationResults(results) {
  if (typeof results !== "undefined") {
    for (const error of results) {
      console.error(chalk.red(`  *  ${error}`));
    }
  }
}

const MODULE_NAMES = new Set(flatMap(Object.values(modules), Object.keys));

/**
 * Check if the created library's name is valid otherwise error and exit the process
 * @param {string} libraryName
 * @return {void}
 */
module.exports = function checkName(libraryName) {
  const validationResult = validateLibraryName(libraryName);
  if (!validationResult.validForNewPackages) {
    console.error(
      `Could not create a library called ${chalk.red(
        `"${libraryName}"`
      )} because of npm naming restrictions:`
    );
    printValidationResults(validationResult.errors);
    printValidationResults(validationResult.warnings);
    process.exit(1);
  }
  if (MODULE_NAMES.has(libraryName)) {
    console.error(
      chalk.red(
        `We cannot create a library called ${chalk.green(
          libraryName
        )} because a dependency with the same name exists.\n` +
          `Due to the way npm works, the following names are not allowed:\n\n`
      ) +
        chalk.cyan(
          Array.from(MODULE_NAMES)
            .map(depName => `  ${depName}`)
            .join("\n")
        ) +
        chalk.red("\n\nPlease choose a different library name.")
    );
    process.exit(1);
  }
};
