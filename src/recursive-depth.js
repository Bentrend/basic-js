const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(arr) {
    let num = 1;
    
    return count(arr, 2);
    
    function count (arr, currentLevel)  {
      for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {
          
          count(arr[i], currentLevel+1);

          if (i == arr.length - 1) {
            if(currentLevel > num) {
              num = currentLevel;
            }
            return num;
          }
        }
        
      }
      return num;
    }
}
}

module.exports = {
  DepthCalculator
};
