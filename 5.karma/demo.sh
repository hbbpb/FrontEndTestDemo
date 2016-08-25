#!/usr/bin/env bash

# Install Karma:
npm install karma --save-dev

# Install plugins that your project needs:
npm install karma-jasmine karma-chrome-launcher --save-dev

# Run Karma:
../node_modules/karma/bin/karma start