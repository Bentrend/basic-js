const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let date1 = new Date(date)

  if (!date1.getFullYear() || !date1.getMonth() || !date1.getDate() || !date1.getHours() || date1.getMinutes() ) {
    throw new NotImplementedError("Invalide date!") ;
    
  }

  let spring = [2, 3, 4];
  let summer = [5, 6, 7];
  let autumn = [8, 9, 10];
  let winter = [11, 0, 1];

  if (spring.includes(date.getMonth())) {return "spring"};
  if (summer.includes(date.getMonth())) {return "summer"};
  if (autumn.includes(date.getMonth())) {return "autumn"};
  if (winter.includes(date.getMonth())) {return "winter"};

}

module.exports = {
  getSeason
};
