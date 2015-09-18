jCob JavaScript Library
=======================

This JavaScript library supports you in handling objects and managing JavaScript 
components within your website.


Get your copy
-------------

At present, there is no downloadable file available. jCob is in early development 
phase and didn't yield any release yet.


Create a custom build
---------------------

The recommended way of creating a build is by using [Node.js](https://nodejs.org/) in 
combination with [Grunt](http://gruntjs.com/).

First of all, clone the jCob git Repository:

```bash
$ git clone https://github.com/HARING/jCob.git
```

Change to the respective directory:

```bash
$ cd jCob
```

Get the required packages by initializing Node.js:

```bash
$ npm install
```

Compile jCob:

```bash
$ grunt export
```

The result will be saved to *./Distributions/* and is ready to use.