"use strict";
class Series {
  constructor(digits) {
    this.digits = digits;
  }
  slices(length) {
    if (length > this.digits.length) {
      throw new Error('Series length too long for this string');
    }
    let result = [];
    for (let i = 0; i <= this.digits.length - length; i++) {
      let nextSeries = [];
      for (let j = i; j < i + length; j++) {
        nextSeries.push(Number(this.digits[j]));
      }
      result.push(nextSeries);
    }
    return result;
  }
}
module.exports = Series;