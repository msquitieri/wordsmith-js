readability-js
==============

[![Build Status](https://travis-ci.org/msquitieri/readability-js.svg?branch=master)](https://travis-ci.org/msquitieri/readability-js)

Hello, there! I thought it would be interesting to implement some readability algorithms in javascript.

Documentation
==============

Everything is written in ES6, transpiled by Babel, and bundled using Browserify. Tests are written with Mocha.



All of the functionality is found in the `Wordsmith` object. Here is an overview of its methods:

- `Wordsmith.syllableCount(data)` : where `data` can be a string or an array of strings. Returns the total number of syllables found in the string or null if you input an invalid value.
- `Wordsmith.sentenceCount(string)` : returns the number of sentences found in the string by using the delimiter `/[\.?!]/`
- `Wordsmith.wordCount(string)` : returns the number of words found in the string.
- `Wordsmith.removePuctuation(string)` : removes everything except spaces and A-z characters.

These methods are used to implement these readability algorithms:

- `Wordsmith.fleschKincaidGradeLevel(string)` : returns the [Flesch-Kincaid Grade Level](http://en.wikipedia.org/wiki/Flesch-Kincaid#Flesch.E2.80.93Kincaid_Grade_Level "Flesch-Kincaid Grade Level on Wikipedia") of the input string.
- `Wordsmith.fleschReadingEaseScore(string)` : returns the [Flesch Reading Ease Score](http://en.wikipedia.org/wiki/Flesch-Kincaid "Flesch Readability tests on Wikipedia") of the input string.

Building
==============

Just run `npm run build`. This will place `readability.min.js` into the `dist/` directory.

Running Tests
==============

Just run `npm run test`

