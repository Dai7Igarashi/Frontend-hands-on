[![node-version](https://img.shields.io/badge/node-10.13.0-brightgreen.svg)](https://github.com/nodejs/node)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

**Tutrial. Async Tutrial**

Refer from [here](https://github.com/reduxjs/redux/tree/master/examples/async).

# Quick Start

```console
# change dir in async-tutrial

# Install node_modules based on `yarn.lock`
$ yarn

# Start
$ yarn start
```

# Table of Contents

* [STEP1. Setup base](#step1-setup-base)
* [STEP2. Write Codes](#step2-write-codes)
* [STEP3. Unit Test with Jest and Enzyme with Travis CI ](#step3-unit-test-with-jest-and-enzyme-with-travis-ci)

## STEP1. Setup base

### Create new project

```console
$ create-react-app tutrial-typescript-react-starter --scripts-version=react-scripts-ts

// eject:
$ git add .
$ git commit -m "temporal commit"
$ yarn run eject
$ git log --oneline /* Check the commit_number of just before "temporal commit" */
$ git reset --soft commit_number
$ git status /* $ git add . , if needed. */

// install modules:
$ yarn add redux react-redux redux-logger redux-thunk
$ yarn add -D @types/react-redux @types/redux-logger @types/redux-thunk

$ yarn add styled-components
$ yarn add -D typescript-styled-plugin @types/styled-components

$ yarn add -D enzyme @types/enzyme enzyme-adapter-react-16 @types/enzyme-adapter-react-16 react-test-renderer

$ git commit -m "First commit"
```

## STEP2. Write Codes

