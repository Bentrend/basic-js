const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let result = 0;
  if(s1.length == 0 || s2.length == 0) {
    return 0;
  }
  
  for (char1 of s1) {
    console.log(s2);
    for (let i = 0; i < s2.length; i++) {
      if(char1 === s2[i]) {
        result++;
        s2 = s2.substring(0, i) + s2.substring(i+1);
        break;
      }
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
