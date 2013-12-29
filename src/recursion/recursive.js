'use strict';

var binary = function (number) {
  var num = parseInt(number, 10);
  if (num === 0 || num === 1) {
    return number.toString();
  }

  var k = Math.floor(num / 2);
  var b = num % 2;
  var e = binary(k);
  return e.toString() + b.toString();
};

var factorial = function (number) {
  return number === 0 ? 1 : factorial(number - 1) * number;
};


module.exports.binary     = binary;
module.exports.factorial  = factorial;

