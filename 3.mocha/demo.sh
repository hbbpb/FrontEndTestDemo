#!/usr/bin/env bash

#url : http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html

#01
mocha add.test.js

#02
mocha --recursive
mocha --reporter spec

#03
../../node_modules/.bin/mocha --recursive --reporter mochawesome
mocha --reporter tap|dot|nyan|landing|list|progress|json|min|doc|markdown

#04
../../node_modules/mocha/bin/mocha --compilers js:babel-core/register

#05
mocha -t 5000 timeout.test.js
mocha -t 10000 async.test.js
mocha promise.test.js

#06
mocha beforeEach.test.js

#07  only  skip
mocha --recursive

#08 run in browser
mocha init

#09
mocha --recursive -R markdown > spec.md
