readability-js
==============

Hello, there! I thought it would be interesting to implement some readability algorithms in javascript.


Documentation
==============

All of the functionality is found in the `readability` object. Here is an overview of its methods:

- `syllable_count(data)` : where `data` can be a string or an array of strings. Returns the total number of syllables found in the string or null if you input an invalid value.
- `sentence_count(string)` : returns the number of sentences found in the string by using the delimiter `/[\.?!]/`