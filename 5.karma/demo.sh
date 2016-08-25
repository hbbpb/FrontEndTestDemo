#!/usr/bin/env bash

# Install Karma:
npm install karma --save-dev

# Install plugins that your project needs:
npm install karma-jasmine karma-chrome-launcher --save-dev

# Run Karma:
../node_modules/karma/bin/karma start

# Config
karma init
# Which testing framework do you want to use?
# jasmine|qunit|mocha|nodeunit

# Do you want to use Require.js ?
# no

# Do you want to capture any browsers automatically ?
# Chrome|ChromeCanary|Firefox|Safari|PhantomJS|Opera|IE

# What is the location of your source and test files ?

# Should any of the files included by the previous patterns be excluded ?

# Do you want Karma to watch all the files and run the tests on change ?
# no

karma start karma.conf.js


