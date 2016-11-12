import { expect } from 'chai';
import Wordsmith from '../../src/models/wordsmith';

describe('Wordsmith', function() {
  describe('removePunctuation', function() {
    it('removes all punctuation from a string', function() {
      let string = 'Come. To! The. Store?';
      expect(Wordsmith.removePunctuation(string)).to.equal('Come To The Store');
    });
  });

  describe('getWords', function() {
    it('returns an array of words for a string', function() {
      let string = 'Come. To! The. Store?';
      expect(Wordsmith.getWords(string)).to.deep.equal(['Come', 'To', 'The', 'Store']);
    });
  });

  describe('wordCount', function() {
    it('returns the number of words in a string', function() {
      let string = 'Come. To! The. Store?';
      expect(Wordsmith.wordCount(string)).to.equal(4);
    });
  });

  describe('sentenceCount', function() {
    it('returns the number of sentences in a string', function() {
      let string = 'Come. To! The. Store?';
      expect(Wordsmith.sentenceCount(string)).to.equal(4);
    });
  });

  describe('wordSyllableCount', function() {
    it('returns the number of syllables in a single word', function() {
      let word = 'some';
      expect(Wordsmith.wordSyllableCount(word)).to.equal(1);

      word = 'onomatopoeia';
      expect(Wordsmith.wordSyllableCount(word)).to.equal(6);
    });
  });

  describe('syllableCount', function() {
    it('returns the number of syllables in a sentence', function() {
      let sentence = 'I want to go to the store';
      expect(Wordsmith.syllableCount(sentence)).to.equal(7);
    });

    it('also accepts an array of words', function() {
      let sentenceArray = ['I', 'want', 'to', 'go', 'to', 'the', 'store'];
      expect(Wordsmith.syllableCount(sentenceArray)).to.equal(7);
    });
  });

  describe('fleschKincaidGradeLevel', function() {
    it('returns the grade level of a given paragraph', function() {
      let paragraph = 'It is going to be so big. So big. Believe me. We are going to build a wall and make Mexico pay for it.';

      expect(Wordsmith.fleschKincaidGradeLevel(paragraph)).to.be.lessThan(1);

      paragraph = 'I anticipate with pleasing expectation that retreat in which I promise myself to realize, without alloy, the sweet enjoyment of partaking, in the midst of my fellow-citizens, the benign influence of good laws under a free government, the ever-favorite object of my heart, and the happy reward, as I trust, of our mutual cares, labors, and dangers.';

      expect(Wordsmith.fleschKincaidGradeLevel(paragraph)).to.be.greaterThan(25);
    });
  });

  describe('fleschReadingEaseScore', function() {
    it('returns the ease of reading level of a given paragraph', function() {
      let paragraph = 'It is going to be so big. So big. Believe me. We are going to build a wall and make Mexico pay for it.';

      expect(Wordsmith.fleschReadingEaseScore(paragraph)).to.be.greaterThan(105);

      paragraph = 'I anticipate with pleasing expectation that retreat in which I promise myself to realize, without alloy, the sweet enjoyment of partaking, in the midst of my fellow-citizens, the benign influence of good laws under a free government, the ever-favorite object of my heart, and the happy reward, as I trust, of our mutual cares, labors, and dangers.';

      expect(Wordsmith.fleschReadingEaseScore(paragraph)).to.be.lessThan(11);
    });
  });
});