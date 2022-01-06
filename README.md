# Phil's Planetary Age Calculator

#### By: Phil Curran / pecurran@hotmail.com

#### An app that calculates your age and life expectancy on other planets!

## Technologies Used

* HTML
* Vanilla Js
* Bulma CSS / SCSS
* NPM
* Webpack
* Jest
* Babel
* ESLint

## Description

Submit your birthdate into the form, and you'll see:
* Your solar age on 6 planets
* Years left to live on that planet based on Earth life expectancy
* Years left or years over life expectancy on Earth

## Setup / Installation Requirements

* Get the repo: git clone
* Install packages: npm install
* Start liveserver: npm start
* Run tests: npm test

## Known Bugs

* Since time calculations are made with .date(), some tests may fail; you may need to manually calculate and update your expected test results for faster-moving planets (e.g. Mercury, Venus, etc.).

## License

Find a bug?  Want to make this app even more rad?  Fork and tweak to your heart's content!  Then let me know what you did.  

## Contact Me

Copyright (c) 02JAN2022 Phil Curran / pecurran@hotmail.com

## Tests

See __tests__/planetaryCalculator.test.js for more info.
Note that you may need to manually adjust some expected results, since output will vary depending on what birthday you enter, and considering that the measuring point from .now is generated with .date() at the time of form submission.