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

$ git commit -m "First commit"
```

## STEP2. Create Components

All comments are written in each file.
So please check them :)

### 1. Create Store

You should think about what state to hold in store.

### 2. Create Actions

Write ActionCreater.

### 3. Create Reducers

### 4. Create Sagas

### 5. Create Components

### 6. Create Containers