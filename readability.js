var readability = {
  syllable_count : function(data) {
    if (typeof data != "string" && !(data instanceof Array)) return null;
    if (data instanceof Array) data = data.join(" ");

    var allWords = this.get_words(data);

    var totalSyllableCount = 0;
    for (var i = allWords.length - 1; i >= 0; i--) {
      totalSyllableCount += this.word_syllable_count(allWords[i]);
    }
    return totalSyllableCount;
  },

  get_words : function(string) {
    string = this.remove_punctuation(string);
    var properWords = [];
    var trimmedWord;

    var words = string.split(" ");
    for (var i = 0; i < words.length; i++) {
      trimmedWord = words[i].trim();
      if (trimmedWord != "") properWords.push(trimmedWord)
    };
    return properWords;
  },

  remove_punctuation : function(string) {
    return string.replace(/[^a-zA-z ]/g, "");
  },

  word_count : function(string) {
    return this.get_words(string).length;
  },

  word_syllable_count : function(word) {
    word = word.toLowerCase();
    if (word.length <= 3) { return 1; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    return word.match(/[aeiouy]{1,2}/g).length;
  },

  sentence_count : function(string) {
    var realSentences = [];
    var sentenceDelimeter = /[\.?!]/;

    var possibleSentences = string.split(sentenceDelimeter);
    for (var i = possibleSentences.length - 1; i >= 0; i--) {
      var sentence = possibleSentences[i].trim();
      if (sentence != "") realSentences.push(sentence);
    }
    return realSentences.length;
  },

  flesch_kincaid_grade_level : function(string) {
    var wordCount = this.word_count(string);
    var sentenceCount = this.sentence_count(string);
    var syllableCount = this.syllable_count(string);

    return ( 0.39*(wordCount/sentenceCount) + 11.8*(syllableCount/wordCount) - 15.59 );
  },

  flesch_reading_ease_score : function(string) {
    var wordCount = this.word_count(string);
    var sentenceCount = this.sentence_count(string);
    var syllableCount = this.syllable_count(string);

    return ( 206.835 - 1.015*(wordCount/sentenceCount) - 84.6*(syllableCount/wordCount) );
  }
}
