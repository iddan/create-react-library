#!/usr/bin/env node
const path = require("path");
const { loggedSpawn } = require("../util");

loggedSpawn("yarn", [
  "run",
  "babel",
  "src",
  "--copy-files",
  "--preset=react-app",
  `--out-dir=${path.join(process.cwd(), "dist")}`
]).catch(console.error);
