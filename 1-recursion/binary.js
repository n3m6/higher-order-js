'use strict';

function binary(number) {
  var num = parseInt(number, 10);
  if (num === 0 || num === 1) {
    return number.toString();
  }

  var k = Math.floor(num / 2);
  var b = num % 2;
  var e = binary(k);
  return e.toString() + b.toString();
}

console.log(binary(37)); 

