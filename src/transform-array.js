const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
  throw new NotImplementedError("\'arr\' parameter must be an instance of the Array!");
  }
  let comands = [
    "--double-next",
    "--double-prev",
    "--discard-prev",
    "--discard-next"
  ];

  let array = arr.slice(0);
  
  for (let i = 0; i < array.length; i++) {
    if (arr[i] === "--double-next"){
      array.splice(i, 1, array[i+1])
    }
    if (arr[i] === "--double-prev" && i!==0){
      array.splice(i, 1, array[i-1])
    }
    if (arr[i] === "--discard-prev" && i!==0){
      delete array[i-1];
    }
    if (arr[i] === "--discard-next"){
      delete array[i+1];
    }
  }

let result = [];


  for (item of array) {
    if(item !== undefined && item !== NaN && !comands.includes(`${item}`)) {
   
      result.push(item)
    }
  }
console.log(result);
  return result;
  
}

module.exports = {
  transform
};
