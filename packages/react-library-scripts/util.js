const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);
const exec = promisify(child_process.exec);

exports.mkdir = promisify(fs.mkdir);

exports.loggedExec = async (...args) => {
  const { stdout, stderr } = await exec(...args);
  if (stdout) console.info(stdout);
  if (stderr) console.error(stderr);
};

exports.dumpTextIn = (directory, subPath, content) =>
  writeFile(path.join(directory, subPath), content, { flags: "w+" });

exports.dumpJSONIn = (directory, subPath, content) =>
  exports.dumpTextIn(directory, subPath, JSON.stringify(content, null, "\t"));
