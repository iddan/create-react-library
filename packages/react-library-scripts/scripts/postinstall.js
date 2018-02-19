const { peerDependencies } = require("../modules");
const crossSpawn = require("react-dev-utils/crossSpawn");

console.log("Installing peer dependencies");
crossSpawn("yarn", [
  "add",
  "--peer",
  ...Object.entries(peerDependencies).map(
    ([name, version]) => name + "@" + version
  )
]);
