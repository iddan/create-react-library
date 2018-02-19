#!/usr/bin/env node
const pkg = require("./package.json");
const spawn = require("react-dev-utils/crossSpawn");

const scripts = new Set(["start", "build", "test", "postinstall"]);

async function cli(args) {
  const [firstArg] = args;
  const scriptIndex = args.findIndex(arg => scripts.has(scripts));
  const script = scriptIndex === -1 ? firstArg : args[scriptIndex];
  const nodeArgs = args.slice(0, scriptIndex);

  if (scripts.has(script)) {
    const result = spawn.sync(
      "node",
      [
        ...nodeArgs,
        require.resolve("./scripts/" + script),
        ...args.slice(scriptIndex + 1)
      ],
      { stdio: "inherit" }
    );
    if (result.signal) {
      if (result.signal === "SIGKILL") {
        console.log(
          "The build failed because the process exited too early. " +
            "This probably means the system ran out of memory or someone called " +
            "`kill -9` on the process."
        );
      } else if (result.signal === "SIGTERM") {
        console.log(
          "The build failed because the process exited too early. " +
            "Someone might have called `kill` or `killall`, or the system could " +
            "be shutting down."
        );
      }
      process.exit(1);
    }
    process.exit(result.status);
  } else {
    console.log('Unknown script "' + script + '".');
    console.log("Perhaps you need to update react-scripts?");
    console.log(
      `See: ${pkg.homepage}/template/README.md#updating-to-new-releases`
    );
  }
}

const [, , ...args] = process.argv;

cli(args);
