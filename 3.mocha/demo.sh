#!/usr/bin/env bash
mocha 3.mocha/demo01/add.test.js
mocha --recursive
mocha --reporter spec
mocha --reporter tap|dot|nyan|landing|list|progress|json|min|doc|markdown
