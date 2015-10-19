# Prerequisites

During the Mastering Ember course, we'll be using [ember-cli](http://www.ember-cli.com/) to develop our Ember
application. Ember-cli is a Node package that uses [bower](http://bower.io/) to manage client-side assets. This will
walk you through installing Node, ember-cli and bower.

We'll be running specific versions of each package. To check that these versions are properly installed, you should see
the following output in the terminal.

    > node -v
    v4.2.1
    > npm -v
    2.14.7
    > ember -v
    version: 1.13.8
    ...
    > bower -v
    1.6.3

## 1. Install Node

### on OSX

The best way to install node on OSX is via [homebrew](http://brew.sh/). Install homebrew and run:

    brew install node

### on Windows

Execute the node installer at [https://nodejs.org/en/#download](https://nodejs.org/en/#download)

## 2. Install ember-cli

    npm install -g ember-cli

## 3. Install bower

    npm install -g bower
