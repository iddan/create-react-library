# Create React Library

Create React libraries with no configuration. Like [Create React App](https://github.com/facebook/create-react-app) but for libraries

* [Creating a Library](#creaing-a-library)
* [User Guide]

Create React App works on macOS, Windows, and Linux.
If something doesn’t work, please file an issue.

## Creating a Library

```bash
yarn create react-library $LIBRARY_NAME
```

## How to Update to New Versions?

Please refer to the [User Guide] for this and other information.

## Philosophy

One Dependency: There is just one build dependency. It uses Webpack, Babel, ESLint, and other amazing projects, but provides a cohesive curated experience on top of them.

No Configuration Required: You don't need to configure anything. Reasonably good configuration of both development and production builds is handled for you so you can focus on writing code.

No Lock-In: You can “eject” to a custom setup at any time. Run a single command, and all the configuration and build dependencies will be moved directly into your project, so you can pick up right where you left off.

## What’s Included?

* React, JSX, modern ECMAScript, and Flow syntax support: [Babel]
* Linting: [ESLint] & [Flow]
* Formatting: [Prettier]
* A live development environment server that warns about common mistakes: [Storybook]
* A fast interactive unit test runner with built-in support for coverage reporting: [Jest]
* Hassle-free updates for the above tools with a single dependency.

[user guide]: https://github.com/iddan/create-react-library/blob/master/packages/react-library-scripts/template/readme.md
[babel]: https://babeljs.io
[eslint]: https://eslint.org
[flow]: https://flowtype.org
[prettier]: https://prettier.io
[storybook]: https://storybook.js.org
[jest]: https://facebook.github.io/jest
