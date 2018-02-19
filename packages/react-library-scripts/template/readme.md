This project was bootstrapped with [Create React Library].

Below you will find some information on how to perform common tasks.
You can find the most recent version of this guide [here](https://github.com/iddan/create-react-library/blob/master/packages/react-libarary-scripts/template/README.md).

* [Updating to New Releases](#updating-to-new-releases)
* [Sending Feedback](#sending-feedback)
* [Available Scripts](#available-scripts)

## Table of Contents

## Updating to New Releases

Create React Library is divided into two packages:

* `create-react-library` is a global command-line utility that you use to create new projects.
* `react-library-scripts` is a development dependency in the generated projects (including this one).

You almost never need to update `create-react-library` itself: it delegates all the setup to `react-library-scripts`.

When you run `create-react-library`, it always creates the project with the latest version of `react-library-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `react-library-scripts`, [open the changelog](https://github.com/iddan/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-library-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/iddan/create-react-app/blob/master/CHANGELOG.md) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `react-library-scripts` painlessly.

## Sending Feedback

We are always open to [your feedback](https://github.com/iddan/create-react-app/issues).

## Available Scripts

In the project directory, you can run:

### `npm start`

Starts a development server.<br>
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

[create react library]: https://github.com/iddan/create-react-library
