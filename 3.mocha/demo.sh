#!/usr/bin/env bash
mocha 3.mocha/demo01/add.test.js
mocha --recursive
mocha --reporter spec
../../node_modules/.bin/mocha --recursive --reporter mochawesome
mocha --reporter tap|dot|nyan|landing|list|progress|json|min|doc|markdown
