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

});



