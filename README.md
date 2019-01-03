**This is the frontend's hands-on for biggners and me :)**

# Table of Contents

* [Support](#support)
  * [Setup Node.js](#setup-nodejs)
* [Ex1. Typescript-React](#ex1-typescript-react)
* [Ex2. Socket.io](#ex2-socketio)
* [Ex3. React-Redux](#ex3-react-redux)
* [Ex4. Express](#ex4-express)
* [Ex5. SPA-SSR](#ex5-spa-ssr)
* [Ex6. PWA](#ex6-pwa)
* [Ex7. RxJS](#ex7-rxjs)
* [Ex8. WebAssembly](#ex8-webassembly)
* [Option](#option)
  * [webpack](#webpack)
  * [GitHub Flow](#github-flow)

## Support

This hands-on is working on MacOS X and using bash.

### Setup Node.js

We use [nodenv](https://github.com/nodenv/nodenv#basic-github-checkout) for managing node.js versions.
You can setup node.js and yarn as below.

1. Clone nodenv into home directory.

  ```console
  $ git clone https://github.com/nodenv/nodenv.git ~/.nodenv
  ```

2. Add `~/.nodenv/bin` to environment variable `$PATH`.

  ```conaole
  # This command being for `bash`.
  $ echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.bash_profile
  ```

3. Integrated set up for nodenv.

  ```console
  $ ~/.nodenv/bin/nodenv init
  ```

4. Restart shell.

  ```console
  $ exec $SHELL -l
  ```

5. Verify that nodenv is available.

  ```console
  $ curl -fsSL https://github.com/nodenv/nodenv-installer/raw/master/bin/nodenv-doctor | bash
  ```

  - It `nodenv init` doesn't work well, please deal with as below.

    1. Write it in `~/.bash_profile`
    ```
    export PATH="$HOME/.nodenv/bin:$PATH"
    eval "$(nodenv init -)"
    ```

    2. Reload ~/.bash_profile.
    ```console
    $ source ~/.bash_profile
    ```

  - If it doesn't suppot `nodenv install`, please install `node-build` as below.
  ```console
  $ mkdir -p "$(nodenv root)"/plugins
  $ git clone https://github.com/nodenv/node-build.git "$(nodenv root)"/plugins/node-build
  ```

6. Upgrading from git.

  - nodenv
  ```console
  $ cd ~/.nodenv
  $ git pull
  ```

  - node-build
  ```console
  $ cd "$(nodenv root)"/plugins/node-build && git pull
  ```

7. Install Node.js

  - You can now manage any versions of Node.js by **nodenv**.

  ```console
  # list all available versions:
  $ nodenv install -l

  # install a Node version:
  $ nodenv install 10.13.0
  ```
  
  - Check the Node version Long Term Support(LTS) [here](https://github.com/nodejs/Release#release-schedule).

8. Set the global Node version.

  ```console
  # check current Node version:
  $ nodenv versions

  # checkout the global Node version:
  $ nodenv global 10.13.0
  ```

  - If it doesn't work well, please deal with as below.
  ```console
  # after nodenv install:
  $ nodenv rehash

  # and replay 8.
  ```

9. Install yarn from homebrew.

  ```console
  $ brew install yarn --without-node
  ```
  
  - If you have not installed `homebrew` yet, please read [here](https://brew.sh/index).

## Ex1. Typescript-React

[Get Start](https://github.com/Dai7Igarashi/frontend-hands-on/tree/master/ex1__typescript-react/tutrial-typescript-react-starter)

## Ex2. Socket.io

[Get Start](https://github.com/Dai7Igarashi/frontend-hands-on/tree/master/ex2__socketio/chat-example)

## Ex3. React-Redux

Please Wait :)

## Ex4. Express

Please Wait :)

## Ex5. SPA-SSR

Please Wait :)

## Ex6. PWA

Please Wait :)

## Ex7. RxJS

Please Wait :)

## Ex8. WebAssembly

Please Wait :)

## Option
This is optional guide!

### webpack

Please Wait :)

### GitHub Flow

[Here](https://github.com/Dai7Igarashi/frontend-hands-on/tree/master/option/github_flow)
