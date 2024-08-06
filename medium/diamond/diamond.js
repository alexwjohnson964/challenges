"use strict";
const SPACE = ' ';
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
class Diamond {
  /*
  Builds and returns a diamond of letters from "A" up to the given maximum letter
  */
  static makeDiamond(maxLetter){
    if (maxLetter === 'A'){
      return 'A\n';
    }
    let diamond = ''
    let letters = LETTERS.slice(0,LETTERS.indexOf(maxLetter) + 1);
    console.log(letters);
    letters.forEach(letter => {
      diamond += this.getLine(letter, maxLetter);
    })
    letters.pop();
    letters = letters.reverse();
    letters.forEach(letter => {
      diamond += this.getLine(letter, maxLetter);
    })
    return diamond;
  }
  /*
  Returns one line of a diamond for the specified
  letter, with a newline at the end
  */
  static getLine(letter, maxLetter) {
    let str = '';
    let externalSpaces = Diamond.getExternalSpaces(letter, maxLetter);
    let internalSpaces = Diamond.getInternalSpaces(letter);
    if (letter === 'A'){
      str += SPACE.repeat(externalSpaces)
      str += 'A';
      str += SPACE.repeat(externalSpaces);
    } else {
      str += SPACE.repeat(externalSpaces);
      str += letter;
      str += SPACE.repeat(internalSpaces);
      str += letter;
      str += SPACE.repeat(externalSpaces);
    }
    str += '\n';
    return str;
  }
  /* 
  Returns the appropriate count of spaces in between instances of the
  specified letter when printing a line of a diamond
  */
  static getInternalSpaces(letter){
    let numSpaces = LETTERS.indexOf(letter) * 2 - 1;
    return numSpaces;
  }
  /*
  Returns the appropriate count of spaces on one edges of the
  letter(s) when printing a line of a diamond
  */
  static getExternalSpaces(letter, maxLetter) {
    let numSpaces;
    if (letter == 'A'){
      return ((Diamond.getInternalSpaces(maxLetter) + 1)) / 2
    }
    return (Diamond.getInternalSpaces(maxLetter) - Diamond.getInternalSpaces(letter)) / 2
  }
}
module.exports = Diamond;
