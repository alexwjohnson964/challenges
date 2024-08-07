const LETTER_VALUES = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
}
function removeInvalidChars(string) {
  return string ? string.replace(/[^a-z|A-Z]/g, "") : '';
}

class Scrabble {
  static score(word){
    let score = 0;
    word = removeInvalidChars(word);
    for (let i = 0; i < word.length; i++) {
      let char = word[i].toUpperCase();
      score += LETTER_VALUES[char];
    }
    return score;
  }
  constructor(word){
    this.word = word; 
  }
  score(){
    let score = 0;
    let word = removeInvalidChars(this.word);
    for (let i = 0; i < word.length; i++) {
      let char = word[i].toUpperCase();
      score += LETTER_VALUES[char];
    }
    return score;
  }
}
module.exports = Scrabble;