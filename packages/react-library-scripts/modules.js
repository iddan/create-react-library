const pkg = require("./package.json");

module.exports = {
  dependencies: {},
  devDependencies: {
    [pkg.name]: pkg.version
  },
  peerDependencies: {
    react: "16.2.0",
    "react-dom": "16.2.0"
  }
};
