[![node-version](https://img.shields.io/badge/node-10.13.0-brightgreen.svg)](https://github.com/nodejs/node)

**Tutrial. Redux-Saga**

Refer from [here](https://github.com/redux-saga/redux-saga/tree/master/examples/async).

# Quick Start

```console
# change dir in redux-saga

# Install node_modules based on `yarn.lock`
$ yarn

# Start
$ yarn start
```

# Table of Contents

* [STEP1. Setup base](#step1-setup-base)
* [STEP2. Create Components](#step2-create-components)
* [STEP3. Unit Test with Jest and Enzyme](#step3-unit-test-with-jest-and-enzyme)
* [STEP4. State Management with Redux](#step4-state-management-with-redux)

## STEP1. Setup base

### Create new project

```console
$ create-react-app redux-saga --scripts-version=react-scripts-ts

// eject:
$ git add .
$ git commit -m "temporal commit"
$ yarn run eject
$ git log --oneline /* Check the commit_number of just before "temporal commit" */
$ git reset --soft commit_number
$ git status /* $ git add . , if needed. */

// install modules:
$ yarn add redux react-redux redux-saga isomorphic-fetch
$ yarn add -D @types/react-redux @redux-saga/is @types/isomorphic-fetch

$ yarn add -D enzyme @types/enzyme enzyme-adapter-react-16 @types/enzyme-adapter-react-16 react-test-renderer

$ git commit -m "First commit"
```