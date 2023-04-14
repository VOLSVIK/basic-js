// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length == 0) {
    return {}
  } else {
      let str = '', rezNN = 0, rezNNN = 0, arrRev = []
  let rez = {}
  domains.forEach((n, i) => {
    rezNNN++
    if (n.split('.').length == 3) {
      str = '.' + n.split('.')[2];
    } else {
      if (n.split('.').length == 2) {
        str = '.' + n.split('.')[1];
      } else {
        str = '.' + n.split('.')[0];
      }
    }
    rez[str] = rezNNN
      if (n.split('.').slice(1).length > 0 ) {
        rezNN++
        if (n.split('.').slice(1).length == 2) {
          str = n.split('.').slice(1).join('.');
        } else {
          str = n.split('.').slice(0).join('.');
        }
        arrRev = '.' + str.split('.').reverse().join('.');
        console.log(arrRev);
        console.log(rezNN);
        rez[arrRev] = rezNN
        console.log(rez);
      }
      if (n.split('.').slice(2).length > 0 ) {
        str = n.split('.').slice(0).join('.');
        arrRev = '.' + str.split('.').reverse().join('.');
        rez[arrRev] = 1
      }
  });
  return rez
  }
}

module.exports = {
  getDNSStats
};
