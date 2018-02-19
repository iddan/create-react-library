const { peerDependencies } = require("../modules");
const crossSpawn = require("react-dev-utils/crossSpawn");

crossSpawn("yarn", [
  "add",
  "--peer",
  ...Object.entries(peerDependencies).map(
    ([name, version]) => name + "@" + version
  )
]);
