export default class Wordsmith {

  static fleschKincaidGradeLevel(string) {
    var wordCount = this.wordCount(string);
    var sentenceCount = this.sentenceCount(string);
    var syllableCount = this.syllableCount(string);

    return ( 0.39*(wordCount/sentenceCount) + 11.8*(syllableCount/wordCount) - 15.59 );
  }

  static fleschReadingEaseScore(string) {
    var wordCount = this.wordCount(string);
    var sentenceCount = this.sentenceCount(string);
    var syllableCount = this.syllableCount(string);

    return ( 206.835 - 1.015*(wordCount/sentenceCount) - 84.6*(syllableCount/wordCount) );
  }

  static sentenceCount(string, delimeter=/[\.?!]/) {
    let realSentences = [];

    let possibleSentences = string.split(delimeter);
    for (let i = possibleSentences.length - 1; i >= 0; i--) {
      let sentence = possibleSentences[i].trim();
      if (sentence != "") realSentences.push(sentence);
    }
    return realSentences.length;
  }

  static syllableCount(data) {
    if (typeof data != "string" && !(data instanceof Array)) return null;
    if (data instanceof Array) data = data.join(" ");

    let allWords = this.getWords(data);

    let totalSyllableCount = 0;
    for (let i = allWords.length - 1; i >= 0; i--) {
      totalSyllableCount += this.wordSyllableCount(allWords[i]);
    }

    return totalSyllableCount;
  }

  static wordSyllableCount(word) {
    let syllableArray;

    word = word.toLowerCase();
    if (word.length <= 3) { return 1; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    syllableArray = word.match(/[aeiouy]{1,2}/g);
    return (!syllableArray) ? 0 : syllableArray.length;
  }

  static wordCount(string) {
    return this.getWords(string).length;
  }

  static getWords(string) {
    string = this.removePunctuation(string);

    let properWords = [];
    let trimmedWord;

    let words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
      trimmedWord = words[i].trim();
      if (trimmedWord != "") properWords.push(trimmedWord);
    }

    return properWords;
  }

  static removePunctuation(string) {
    return string.replace(/[^a-zA-z ]/g, "");
  }
}