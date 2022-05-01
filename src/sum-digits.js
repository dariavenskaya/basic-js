const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  throw new NotImplementedError('Not implemented');
  if (n < 10) { 
    return n};
  while (n > 10){
    n.toString();
    n.split('');
    n.map(Number);
    let sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
        } 
        return sum
  }
  
}

module.exports = {
  getSumOfDigits
};
