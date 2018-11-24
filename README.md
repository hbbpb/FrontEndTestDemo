# Framework

- **QUnit** ：https://qunitjs.com/
    > QUnit is a powerful, easy-to-use JavaScript unit testing framework. It's used by the jQuery, jQuery UI and jQuery Mobile projects and is capable of testing any generic JavaScript code, including itself!

- **Jasmine** ：http://jasmine.github.io/
    > Jasmine is a Behavior Driven Development testing framework for JavaScript. It does not rely on browsers, DOM, or any JavaScript framework. Thus it's suited for websites, Node.js projects, or anywhere that JavaScript can run.

- **Mocha** ：https://mochajs.org/
    > Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
    
    > Tutorial ：http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html

- **Jest** : https://jestjs.io/
    > Jest is used by Facebook to test all JavaScript code including React applications. One of Jest's philosophies is to provide an integrated "zero-configuration" experience. We observed that when engineers are provided with ready-to-use tools, they end up writing more tests, which in turn results in more stable and healthy code bases.

- Tape : https://github.com/substack/tape/

- nodeunit : https://github.com/caolan/nodeunit/

# Assertion

- **Chai** ：http://chaijs.com/
    > Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

- should.js : https://github.com/shouldjs/should.js
    > BDD style shown throughout these docs.

- expect.js : https://github.com/Automattic/expect.js
    > expect() style assertions

- better-assert : https://github.com/tj/better-assert
    > C-style self-documenting assert()

- unexpected : http://unexpected.js.org/
    > The extensible BDD assertion toolkit

# Test Runner

- **Karma** ： https://karma-runner.github.io/1.0/index.html
    
    > A simple tool that allows you to execute JavaScript code in multiple real browsers.

# E2E Test

- **Protractor** : http://www.protractortest.org/
    > Protractor is an end-to-end test framework for AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.

- **NightWatch** : http://nightwatchjs.org/
    > Nightwatch.js is an easy to use Node.js based End-to-End (E2E) testing solution for browser based apps and websites. It uses the powerful Selenium WebDriver API to perform commands and assertions on DOM elements.

- **CodeceptJS** : https://github.com/codeception/codeceptjs/
    > CodeceptJS is a new testing framework for end-to-end testing with WebDriver (or others). It abstracts browser interaction to simple steps which is written from a user perspective.

- **Selenium** ：http://www.seleniumhq.org/
    > Selenium is an umbrella project encapsulating a variety of tools and libraries enabling web browser automation.
    
    > GitBook : https://wizardforcel.gitbooks.io/selenium-doc/content/official-site/introduction.html

- **WebDriver** ：http://www.seleniumhq.org/projects/webdriver/
    > The biggest change in Selenium recently has been the inclusion of the WebDriver API. Driving a browser natively as a user would either locally or on a remote machine using the Selenium Server it marks a leap forward in terms of browser automation.

# Report

- Mochawesome ：http://adamgruber.github.io/mochawesome/
    > Mochawesome is a custom reporter for use with the Javascript testing framework, mocha. It generates a full fledged HTML/CSS report that helps visualize your test suites.

- karma-jasmine-html-reporter : https://github.com/taras42/karma-jasmine-html-reporter
    > A Karma plugin. Dynamically displays tests results at debug.html page.

# Coverage

- **Istanbul** ：https://github.com/gotwarlost/istanbul
    > Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests and browser tests. Built for scale.

- jscoverage : https://github.com/fishbar/jscoverage
    > a javascript coverage tool, can be used in node dev, and browser side js dev

- blanketjs : https://github.com/alex-seville/blanket
    > blanket.js is a simple code coverage library for javascript. Designed to be easy to install and use, for both browser and nodejs.

# Mock

- Mock.js : http://mockjs.com/
    > Mock.js is a simulation data generator to help the front-end to develop and prototype separate from the back-end progress and reduce some monotony particularly while writing automated tests.

- SinonJS : https://sinonjs.org/#get-started
    > Standalone test spies, stubs and mocks for JavaScript. Works with any unit testing framework.

- jQuery-mockjax : https://github.com/jakerella/jquery-mockjax
    > The jQuery Mockjax Plugin provides a simple and extremely flexible interface for mocking or simulating ajax requests and responses

- jasmine-ajax ：https://github.com/jasmine/jasmine-ajax
    > jasmine-ajax is a library that lets you define a set of fake responses for Ajax requests made by your application, specify per spec which response should be used, and keep track of the Ajax requests you make so you can make assertions about the results.

- jasmine-fixture ：https://github.com/searls/jasmine-fixture
    > A script for injecting fixtures into the DOM to be cleaned up after each spec.

- jasmine-query ：https://github.com/velesin/jasmine-jquery
    > jQuery matchers and fixture loader for Jasmine framework

- angular-mocks ：https://docs.angularjs.org/api/ngMock
    > The ngMock module provides support to inject and mock Angular services into unit tests. In addition, ngMock also extends various core ng services such that they can be inspected and controlled in a synchronous manner within test code.

- Enzyme : https://airbnb.io/enzyme/
    > Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

- node-nock : https://github.com/node-nock/nock
    > Nock is an HTTP mocking and expectations library for Node.js

# Headless

- PhantomJS : http://phantomjs.org/
    > PhantomJS is a headless WebKit scriptable with a JavaScript API. It has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG.

- Slimerjs : https://github.com/laurentj/slimerjs/
    > It is a tool like PhantomJs, except that it runs Gecko instead of Webkit, and it is headless when using Firefox 56+.

- Chrome Headless : https://developers.google.com/web/updates/2017/04/headless-chrome
    > Headless Chrome is shipping in Chrome 59. It's a way to run the Chrome browser in a headless environment. Essentially, running Chrome without chrome! It brings all modern web platform features provided by Chromium and the Blink rendering engine to the command line.

- nightmare : https://github.com/segmentio/nightmare
    > Nightmare is a high-level browser automation library from Segment.The goal is to expose a few simple methods that mimic user actions (like goto, type and click), with an API that feels synchronous for each block of scripting, rather than deeply nested callbacks. It was originally designed for automating tasks across sites that don't have APIs, but is most often used for UI testing and crawling.

# REST API

- SuperTest : https://github.com/visionmedia/supertest
    > The motivation with this module is to provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.


# Style

- PhantomCSS : https://github.com/HuddleEng/PhantomCSS
    > CSS regression testing. A CasperJS module for automating visual regression testing with PhantomJS 2 or SlimerJS and Resemble.js. For testing Web apps, live style guides and responsive layouts.

- BackstopJS : https://github.com/garris/BackstopJS
    > BackstopJS automates visual regression testing of your responsive web UI by comparing DOM screenshots over time.

# Linting

- ESLint : https://eslint.org/
    > ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

- JSHint : https://jshint.com/about/
    > JSHint is a community-driven tool that detects errors and potential problems in JavaScript code. Since JSHint is so flexible, you can easily adjust it in the environment you expect your code to execute. JSHint is open source and will always stay this way.

- JSLint : http://jslint.com/
    > JSLint, The JavaScript Code Quality Tool


# Demo

- Github : https://github.com/hbbpb/FrontEndTestDemo

    #### How to use
    
    1. Clone this project
    
            $ git clone https://github.com/hbbpb/FrontEndTestDemo.git

    2. Go to the project directory

            $ cd FrontEndTestDemo

    3. Install dependencies, please check the package.json file

            $ npm install

    4. Enjoy!