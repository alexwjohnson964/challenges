const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const DIGITS = '123456789'.split('');

function getRandomItem(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

class Robot{
  static names = []
  /*
    Returns a unique, random name consisting of 
    two letters followed by three digits
  */
  static _generateUniqueName(){
    let name = '';
    name += getRandomItem(LETTERS) + getRandomItem(LETTERS);
    name += getRandomItem(DIGITS) + getRandomItem(DIGITS) + getRandomItem(DIGITS);
    if (Robot.names.includes(name)) {
      return Robot._generateUniqueName();
    }
    Robot.names.push(name);
    return name;
  }
  constructor(){
    this._name = Robot._generateUniqueName();
  }
  /*
    Returns the name of this Robot
  */
  name(){
    return this._name;
  }
  /*
    Resets this robot to factory settings, generating a new unqiue name
  */
  reset() {
    this._name = Robot._generateUniqueName();
  }
}
module.exports = Robot;