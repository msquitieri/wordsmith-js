readability-js
==============

Hello, there! I thought it would be interesting to implement some readability algorithms in javascript.


Documentation
==============

All of the functionality is found in the `readability` object. Here is an overview of its methods:

- `syllable_count(data)` : where `data` can be a string or an array of strings. Returns the total number of syllables found in the string or null if you input an invalid value.
- `sentence_count(string)` : returns the number of sentences found in the string by using the delimiter `/[\.?!]/`
- `word_count(string)` : returns the number of words found in the string.
- `remove_puctuation(string)` : removes everything except spaces and A-z characters.

These methods are used to implement these readability algorithms:

- `flesch_kincaid_grade_level(string)` : returns the [Flesch-Kincaid Grade Level](http://en.wikipedia.org/wiki/Flesch-Kincaid#Flesch.E2.80.93Kincaid_Grade_Level "Flesch-Kincaid Grade Level on Wikipedia") of the input string.