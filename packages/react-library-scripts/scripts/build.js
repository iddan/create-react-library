#!/usr/bin/env node
const babelDir = require("@babel/cli/lib/babel/dir");
const babelConfig = require("../config/babelrc.json");

babelDir({ outDir: "dist", copyFiles: true }, "src", babelConfig);
