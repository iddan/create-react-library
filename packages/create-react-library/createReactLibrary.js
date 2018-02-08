const path = require("path");
const { Command } = require("commander");
const chalk = require("chalk");
const checkName = require("./checkName");
const init = require("react-library-scripts/scripts/init");
const pkg = require("./package.json");

const CWD = process.cwd();

function createReactLibrary(name) {
  checkName(name);
  const directory = path.join(CWD, name)
  console.log(`\nCreating a new React library in ${directory}.\n`);
  init(name, directory);
}

new Command(pkg.name)
  .usage(`${chalk.green("<project-directory>")} [options]`)
  .version(pkg.version)
  .arguments("<library-name>")
  .action(createReactLibrary)
  // Make sure action is executed with no arguments to notify the user.
  .allowUnknownOption()
  .parse(process.argv);
