[![node-version](https://img.shields.io/badge/node-10.13.0-brightgreen.svg)](https://github.com/nodejs/node)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

**Tutrial. TypeScript React Starter**

Refer from [here](https://github.com/Microsoft/TypeScript-React-Starter).

# Quick Start

```console
# change dir in tutrial-typescript-react-starter

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

### Add create-react-app in global

```console
$ yarn global add create-react-app
```

### Create new project

```console
$ create-react-app tutrial-typescript-react-starter --scripts-version=react-scripts-ts

# eject:
$ yarn run eject

# Reinstall node_modules:
$ rm -rf node_modules
$ yarn

# check if it works properly:
$ yarn start
```

## STEP2. Create Components

### Create Hello.tsx

- `src/components/Hello.tsx`
- fix `index.tsx`

```console
# you can verify if it works well:
$ yarn start
```

### Add styled-components

```console
$ yarn add styled-components
$ yarn add -D typescript-styled-plugin @types/styled-components
```

And add below into `tsconfig.json`

```JSON
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "typescript-styled-plugin"
      }
    ]
  }
}
```
## STEP3. Unit Test with Jest and Enzyme

### Setup Testing Utilities

```console
$ yarn add -D enzyme @types/enzyme enzyme-adapter-react-16 @types/enzyme-adapter-react-16 react-test-renderer
```

Next, you have to create `src/setupTests.ts` as below.

```ts
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
```

### Write test code

```console
# Add `src/components/Hello.test.tsx`
$ yarn run test
```

## STEP4. State Management with Redux

### Install Redux

```console
$ yarn add redux react-redux
$ yarn add -D @types/react-redux
```

### About structure of src

```
src
├── actions
│   └── index.ts  // All actions.
│
├── components
│   ├── App.tsx  // Wrapper components.
│   ├── Hello.tsx
│   └── GoodBy.tsx
│
│   // Called by ./components/App.tsx.
│   // Serve state and dispatch to each component.
├── containers
│   ├── Hello.tsx
│   └── GoodBy.tsx
│
│   // Select wanted state from RootState.
├── selectors
│   └── index.ts
│
│   // index: Entry point of rendering.
├── index.tsx
│
│   // state: Integrate all state in a store, called RootState, and all reducers.
└── state.ts
```
