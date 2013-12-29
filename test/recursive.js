'use strict';

var recursive = require('../src/recursion/recursive.js');
var chai   = require('chai');
var assert = chai.assert;

describe('Recursive Tests', function () {

  describe('Binary functon', function () {
  
    it('should take a base 10 integer and generate a binary number', function () {
      var binValue = recursive.binary(37);
      assert.strictEqual('100101', binValue, 'Binary value generated is wrong');
    });

  });

  describe('Factorial function', function () {
  
    it('should take 1 and generate 1', function () {
    
      var facValue = recursive.factorial(1);
      assert.strictEqual(1, facValue, 'Not equal to one');
    });
    it('should take 2 and generate 2', function () {
    
      var facValue = recursive.factorial(2);
      assert.strictEqual(2, facValue, 'Not equal to two');
    });
    it('should take 3 and generate 6', function () {
      var facValue = recursive.factorial(3);
      assert.strictEqual(6, facValue, 'Not equal to six');
    });
    it('should take 4 and generate 24', function () {
      var facValue = recursive.factorial(4);
      assert.strictEqual(24, facValue, 'Not equal to twenty-four');
    });

  });

});



