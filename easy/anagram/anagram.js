"use strict";
class Anagram {
  static isAnagram(wordA, wordB) {
    wordA = wordA.toLowerCase();
    wordB = wordB.toLowerCase();
    if (wordA === wordB) return false;
    wordA = wordA.split('').sort().join('');
    wordB = wordB.split('').sort().join('');
    return wordA === wordB;
    
  }
  constructor(word){
    this.word = word;
  }
  match(words) {
    return words.filter(word => Anagram.isAnagram(word, this.word));
  }
}
module.exports = Anagram;