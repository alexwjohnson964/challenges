const DEFICIENT = 'deficient';
const PERFECT = 'perfect';
const ABUNDANT = 'abundant';

function getDivisors(num){
  let divisors = []
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}
function getAliquotSum(num){
  let divisors = getDivisors(num);
  let result= divisors.reduce((sum, current) => sum + current, 0);
  return result;
}
class PerfectNumber {
  static classify(num){
    if (num < 0) {
      throw new Error('Negative numbers are not allowed')
    }
    if (num === getAliquotSum(num)) {
      return PERFECT;
    }
    else if (num > getAliquotSum(num)) {
      return DEFICIENT;
    }
    else if (num < getAliquotSum(num)) {
      return ABUNDANT;
    }
  }
}
module.exports = PerfectNumber;