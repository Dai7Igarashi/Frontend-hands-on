**Tutrial. TypeScript React Starter**
[![node-version](https://img.shields.io/badge/node-10.13.0-brightgreen.svg)](https://github.com/nodejs/node)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

Refer from [here](https://github.com/Microsoft/TypeScript-React-Starter).

# Table of Contents

* [STEP1. Setup base](#step1-setup-base)
* [STEP2. Create Components](#step2-create-components)

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
	},
}
```
