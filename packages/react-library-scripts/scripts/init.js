const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const { promisify } = require("util");
const modules = require("../modules.json");

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const exec = promisify(child_process.exec);

const DEFAULT_PACKAGE_JSON_PROPERTIES = {
  version: "0.1.0",
  ...modules
};

async function initModules(name, directory) {
  const pkg = {
    name,
    ...DEFAULT_PACKAGE_JSON_PROPERTIES
  };
  // create pacakge.json
  await writeFile(path.join(directory, "package.json"), JSON.stringify(pkg), {
    flags: "w+"
  });
  // install dependencies
  console.log("Installing dependencies");
  const result = await exec("yarn", { cwd: directory });
  console.log(result);
}

module.exports = async function init(name, directory) {
  // create the directory
  await mkdir(directory);
  Promise.all([initModules(name, directory)]).catch(err => {
    console.error(err);
    process.exit(1);
  });
};
