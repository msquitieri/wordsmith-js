var readability = {
  syllable_count : function(data) {
  	if (typeof data != "string" && !(data instanceof Array)) return null;
  	if (data instanceof Array) data = data.join(" ");

  	console.log("passed");

  	var allWords = data.split(" ");
  	for (var i=0; i<allWords.length; i++) allWords[i] = allWords[i].trim();

  	console.log(allWords);

  	var totalSyllableCount = 0;
  	for (var i = allWords.length - 1; i >= 0; i--) {
  		totalSyllableCount += this.word_syllable_count(allWords[i]);
  	}
  	return totalSyllableCount;
  },

  word_count : function(string) {
    var usefulWords = [];
    var words = string.split(" ");

    console.log(words);
    for (var i = words.length - 1; i >= 0; i--) {
      if (words[i].trim() != "") usefulWords.push(words[i]);
    }

    return usefulWords.length;
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
  }
}
