[![node-version](https://img.shields.io/badge/node-10.13.0-brightgreen.svg)](https://github.com/nodejs/node)

**Tutrial. Chat Socket.IO**

Refer from [here](https://github.com/nilshartmann/socket-io-typescript-chat).

# Quick Start

* **Server**

```console
# change dir in server:
# Install node_modules based on `yarn.lock`
$ yarn

# Build & Start:
$ yarn build
$ yarn start
```

* **Client**

```console
# change dir in server:
# Install node_modules based on `yarn.lock`
$ yarn

# Start with webpack-dev-server:
$ yarn start
```

Next, access [localhost:5000](http://localhost:5000) in browser.

Let's open some tabs and do chat!

* **Client**

# Table of Contents

* [STEP1. Create Server](#step1-create-server)
* [STEP2. Create Client](#step2-create-client)

## Main Structure of Tree

```
chat-example
│
├── client
│   ├── public
│   │   ├── dist
│   │   │   └── bundle.js  // transpiled and bundled file by webpack.
│   │   │   /**
│   │   │   * Entry point of devServer.
│   │   │   * Static assets(like .html) is called.(written in contentBase)
│   │   │   */
│   │   └── index.js  // static file.
│   │
│   ├── src
│   │   ├── components
│   │   │   ├── App.tsx
│   │   │   ├── Chat.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   └── ChatList.tsx
│   │   │
│   │   ├── model
│   │   │   └── index.ts  // type setting.
│   │   │
│   │   ├── websocket
│   │   │   └── index.ts  // connection setting between sever and client.
│   │   │
│   │   └── index.ts  // Rendering entry point.
│   │
│   ├── webpack.config.js
│   ├── package.json
│   └── tsconfig.json
│
└── server
    ├── dist  // compiled src file.
    │   ├── model
    │   ├── chat_server.js
    │   └── index.js
    │
    ├── src
    │   ├── model  // type setting.
    │   ├── chat_server.ts  // server setting.
    │   └── index.ts  // Entry point.
    │
    ├── gulpfile.js
    ├── package.json
    └── tsconfig.json
```

## STEP1. Create Server

Server side not need `bundle` or `minify`, we only do compile ts into js by `gulp-typescript`.

### Create new project

```console
# create package.json:
$ yarn init -y

# install modules:
$ yarn add express socket.io @types/express @types/socket.io
$ yarn add -D typescript gulp gulp-typescript
```

### Write tsconfig.json

You should set `"module": "commonjs"`, because may be `Node.js` is not support ES6 as default.
(Some Browsers may be adapted ES6, so it can use `"module": "es6"`.)
**If it is wrong, please give me comments!**

### Create each file

Please check source code.

## STEP2. Create Client

Client side is written in React. It is provided from server, so it need `bundle` or `minify` with `webpack`.

### Create new project

```console
# create package.json:
$ yarn init -y

# install modules:
$ yarn add react react-dom socket.io @types/react @types/react-dom @types/socket.io-client styled-components @types/styled-components
$ yarn add -D typescript ts-loader source-map-loader webpack webpack-cli webpack-dev-server
```

### Create each file

Details are written in each file.
