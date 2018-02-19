const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const mainPkg = require("../package.json");
const omit = require("lodash/fp/omit");

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

const ENDEMIC_PROPERTIES = [
  "dependencies",
  "devDependencies",
  "peerDependencies",
  "scripts",
  "name",
  "description",
  "keywords"
];

const sync = () =>
  Promise.all(
    fs.readdirSync("packages").map(async name => {
      const filePath = path.join("packages", name, "package.json");
      const pkg = JSON.parse(await readFile(filePath));
      const newPkg = {
        ...omit(ENDEMIC_PROPERTIES, mainPkg),
        ...pkg,
        version: mainPkg.version
      };
      await writeFile(filePath, JSON.stringify(newPkg, null, "  "));
    })
  );

sync().catch(err => {
  console.error(err);
  process.exit(1);
});
