"use strict";

class Octal {
  static VALID_DIGITS = ['0','1','2','3','4','5','6','7']
  constructor(num) {
    this.num = num;
  }
  toDecimal(){
    let chars = this.num.split('').reverse();
    let result = 0;
    if (chars.some(char => !Octal.VALID_DIGITS.includes(char))){
      return result;
    }
    for (let pow = 0; pow < chars.length; pow++) {
      result += chars[pow] * 8 ** pow;
    }
    return result;
  }
}

module.exports = Octal;