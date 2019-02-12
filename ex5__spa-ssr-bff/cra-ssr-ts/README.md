[![node-version](https://img.shields.io/badge/node-10.13.0-brightgreen.svg)](https://github.com/nodejs/node)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

**Tutrial. Server Side Remdering; SSR**

Refer from [here](https://github.com/cereallarceny/cra-ssr).

# Quick Start

```console
# change dir in cra-ssr-ts

# Install node_modules based on `yarn.lock`
$ yarn

# Start
$ yarn start
```

# Table of Contents

* [STEP1. Setup base](#step1-setup-base)
* [STEP2. Create Components](#step2-create-components)

## STEP1. Setup base

### Add create-react-app in global

```console
// If you have not installed yet:
$ yarn global add create-react-app

// If it has already installed and its version is < 2.1.0:
$ yarn global upgrade create-react-app
```

### Create new project

`react-scripts-ts` is now **[DEPRECATED]**(https://github.com/wmonk/create-react-app-typescript/)!  
`create-react-app` now supports typescript [natively](https://facebook.github.io/create-react-app/docs/adding-typescript).

```console
$ yarn create react-app cra-ssr-ts --typescript

// eject:
$ git add .
$ git commit -m "temporal commit"
$ yarn run eject
$ git log --oneline /* Check the commit_number of just before "temporal commit" */
$ git reset --soft commit_number
$ git reset /* reset files added on local stage */

// Reinstall node_modules:
$ rm -rf node_modules
$ yarn

// after write README.md:
$ git status /* check the status */
$ git add .
$ git commit -m "Act create-react-app and Add REAME.md"
```

### Add aditional node_modules

```console
$ yarn add react-redux redux redux-thunk react-router-dom connected-react-router
$ yarn add -D @types/react-redux @types/react-router-dom

$ yarn add styled-components
$ yarn add -D typescript-styled-plugin @types/styled-components

$ yarn add -D tslint
$ node_modules/tslint/bin/tslint --init
```

## STEP2. Create Components

### 