const { mkdir, dumpJSONIn, dumpTextIn, loggedSpawn } = require("../util");
const pkg = require("../package.json");
const modules = require("../modules");

const { NODE_ENV } = process.env;

async function initModules(name, directory) {
  if (NODE_ENV === "development") {
    await loggedSpawn("yarn", ["link", pkg.name], {
      cwd: directory
    });
    delete modules.devDependencies[pkg.name];
  }
  // create package.json
  await dumpJSONIn(directory, "package.json", {
    name,
    version: "0.1.0",
    scripts: {
      start: "react-library-scripts start",
      build: "react-library-scripts build",
      test: "react-library-scripts test",
      prepare: "react-library-scripts build",
      postinstall: "react-library-scripts postinstall"
    },
    ...modules
  });
  // install dependencies
  console.log("Installing dependencies");
  await loggedSpawn("yarn", { cwd: directory });
}

async function initSourceControl(directory) {
  console.log("Initiating version control");
  await loggedSpawn("git", ["init"], { cwd: directory });
}

async function defineLinting(directory) {
  console.log("Defining Linting");
  await Promise.all([
    dumpJSONIn(directory, ".eslintrc", { preset: "react-app" }),
    dumpTextIn(directory, ".flowconfig", "")
  ]);
}

async function initDevelopmentEnvironment(directory) {
  const getStorybook = () => loggedSpawn("getstorybook", { cwd: directory });
  try {
    await getStorybook();
  } catch (err) {
    await loggedSpawn("yarn", ["global", "add", "@storybook/cli"]);
    await getStorybook();
  }
}

module.exports = async function init(name, directory) {
  // create the directory
  await mkdir(directory);
  Promise.all([
    initModules(name, directory).then(() =>
      initDevelopmentEnvironment(directory)
    ),
    initSourceControl(directory),
    defineLinting(directory)
  ]).catch(err => {
    console.error(err);
    process.exit(1);
  });
};
