const { peerDependencies } = require("../modules");
const crossSpawn = require("react-dev-utils/crossSpawn");

console.log("Installing peer dependencies");
crossSpawn("yarn", [
  "add",
  "--ignore-scripts",
  "--peer",
  ...Object.entries(peerDependencies).map(
    ([name, version]) => name + "@" + version
  )
]);
