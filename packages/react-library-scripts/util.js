const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);

exports.mkdir = promisify(fs.mkdir);

exports.loggedSpawn = (...args) =>
  new Promise((resolve, reject) => {
    const command = child_process.spawn(...args);
    let stdout = "";
    let stderr = "";
    command.stdout.on("data", data => {
      stdout += data;
      console.info(data.toString());
    });
    command.stderr.on("data", data => {
      stderr += data;
      console.error(data.toString());
    });
    command.on("close", code => {
      if (code === 0) {
        resolve({ stdout, stderr, code });
      } else {
        const error = new Error(stderr);
        error.code = code;
        error.stdout = stdout;
        error.stderr = stderr;
        reject(error);
      }
    });
  });

exports.dumpTextIn = (directory, subPath, content) =>
  writeFile(path.join(directory, subPath), content, { flags: "w+" });

exports.dumpJSONIn = (directory, subPath, content) =>
  exports.dumpTextIn(directory, subPath, JSON.stringify(content, null, "\t"));
