export default class Wordsmith {

  static fleschKincaidGradeLevel(string) {
    const wordCount = this.wordCount(string);
    const sentenceCount = this.sentenceCount(string);
    const syllableCount = this.syllableCount(string);

    /* eslint-disable no-mixed-operators */
    return ((0.39 * (wordCount / sentenceCount)) + (11.8 * (syllableCount / wordCount)) - 15.59);
    /* eslint-enable no-mixed-operators */
  }

  static fleschReadingEaseScore(string) {
    const wordCount = this.wordCount(string);
    const sentenceCount = this.sentenceCount(string);
    const syllableCount = this.syllableCount(string);

    /* eslint-disable no-mixed-operators */
    return (206.835 - 1.015 * (wordCount / sentenceCount) - 84.6 * (syllableCount / wordCount));
    /* eslint-enable no-mixed-operators */
  }

  static sentenceCount(string, delimeter = /[.?!]/) {
    const realSentences = [];

    const possibleSentences = string.split(delimeter);
    for (let i = possibleSentences.length - 1; i >= 0; i -= 1) {
      const sentence = possibleSentences[i].trim();

      if (sentence !== '') {
        realSentences.push(sentence);
      }
    }
    return realSentences.length;
  }

  static syllableCount(data) {
    if (typeof data !== 'string' && !(data instanceof Array)) return null;

    let string;
    if (data instanceof Array) {
      string = data.join(' ');
    } else {
      string = data;
    }

    const allWords = this.getWords(string);

    let totalSyllableCount = 0;
    for (let i = allWords.length - 1; i >= 0; i -= 1) {
      totalSyllableCount += this.wordSyllableCount(allWords[i]);
    }

    return totalSyllableCount;
  }

  static wordSyllableCount(word) {
    let sanitizedWord = word.toLowerCase();
    if (sanitizedWord.length <= 3) { return 1; }

    sanitizedWord = sanitizedWord.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    sanitizedWord = sanitizedWord.replace(/^y/, '');

    const syllableArray = sanitizedWord.match(/[aeiouy]{1,2}/g);

    if (!syllableArray) {
      return 0;
    }

    return syllableArray.length;
  }

  static wordCount(string) {
    return this.getWords(string).length;
  }

  static getWords(string) {
    const sanitizedString = this.removePunctuation(string);
    const words = sanitizedString.split(' ');
    const properWords = [];
    let trimmedWord;

    for (let i = 0; i < words.length; i += 1) {
      trimmedWord = words[i].trim();

      if (trimmedWord !== '') {
        properWords.push(trimmedWord);
      }
    }

    return properWords;
  }

  static removePunctuation(string) {
    return string.replace(/[^a-zA-z ]/g, '');
  }
}
