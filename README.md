# cra-ts-uilib-storybook-storyshots-lerna

Minimalistic template for [*Create-React-App*](https://create-react-app.dev/) in
[*TypeScript*](https://www.typescriptlang.org/) based on UI lib with [*Storybook*](https://storybook.js.org/) and
[*Storyshots*](https://storybook.js.org/docs/testing/structural-testing/) in [*Lerna*](https://lerna.js.org/) monorepo

## Feature tags

- jest
- lerna
- react
- snapshot
- storybook
- storyshot
- template
- test
- typescript
- ui

---

## Direct feature and code ancestors

- [Minimalistic React module in TypeScript with Storybook and Storyshots](https://github.com/softspider/react-ts-storybook-storyshots)
- [lerna](https://github.com/softspider/lerna)

---

## Requirements

* [*Node*](https://nodejs.org/en/download/package-manager/)
* [*create-react-app*](https://facebook.github.io/create-react-app/)
* [*TypeScript*](https://www.typescriptlang.org/)
* [*Lerna*](https://lerna.js.org/)

---

## Install

It is worth noting that in order to unify the settings of environment variables, you must have the *cross-env* package
previously installed. See usage in  *cra-app* *package.json* *test* script.

### Bootstrap

To install all packages dependencies, being in the root directory, run

```
npm run bootstrap
```

## Run

### Start

```sh
npm run start
```

### Run Storybook

```sh
npm run storybook
```

## Test

To run tests of all packages, being in the root directory, run

```
npm run test
```

### Test ui library

```
npm run test:lib
```

### Update storyshots

When testing the user interface library shows storyshot errors (the difference between the new and old storyshots), you
can update the old one with the command 

```
npm run update:storyshots
```

---

## Build *uilib* bundle

Bundle of *uilib* library can be obtained executing the command

```
npm run build:lib
```

The resulting package is located in the *packages/uilib/public/index.js* file.

## Clean

To clear node_modules in all packages, being in the root directory, run

```
npm run clean
```

## Authors

[Alexander Lapygin](https://github.com/AlexanderLapygin)

### License

Licensed under the [MIT license](./LICENSE). 

