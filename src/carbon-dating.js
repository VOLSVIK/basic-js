// const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(n) {
  if (typeof n === 'string') {
    if (parseInt(n, 10) < MODERN_ACTIVITY && parseInt(n, 10) > 0) {
    // if (parseInt(n, 10) < ) {
    rez = parseInt(Math.ceil(Math.log(MODERN_ACTIVITY/n)/(0.693147/HALF_LIFE_PERIOD)), 10);
    return rez
  } else {
    return false
  }
} else {
return false
}
}

module.exports = {
  dateSample
};
