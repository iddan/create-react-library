#!/usr/bin/env node
const { URL } = require("url");

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

const crossSpawn = require("react-dev-utils/crossSpawn");
const openBrowser = require("react-dev-utils/openBrowser");

const protocol = process.env.HTTPS === "true" ? "https" : "http";
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 6006;
const HOST = process.env.HOST || "0.0.0.0";

crossSpawn("yarn", ["run", "storybook"], { stdio: "inherit" });

const url = new URL("http://localhost:3000");

url.host = HOST;
url.port = DEFAULT_PORT;
url.protocol = protocol;

openBrowser(url.toString());
